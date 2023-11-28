from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from classes import User, Game, Rating, ShortGame
import psycopg2

app = FastAPI()

conn = psycopg2.connect(
    host="172.28.32.1",
    port=5432,
    user="postgres",
    password="Aranet1505.",
    database="PlayScore_db"
)


# ROOT-----------------------------------------------------------------------------------------#


@app.get("/")
async def root():
    return {
        "status": "SUCESS",
        "data": "NO DATA"
    }


# USER ENDPOINTS-------------------------------------------------------------------------------#


@app.get("/user_by_username/{username}")
async def get_user(username: str):
    try:
        with conn.cursor() as cur:

            cur.execute("SELECT * FROM tb_user WHERE username = %s;", (username,))
            user_data = cur.fetchone()

            if user_data:
                user_dict = {
                    "user_id"  : user_data[0],
                    "username" : user_data[1],
                    "email"    : user_data[2],
                    "password" : user_data[3]
                }

                return JSONResponse(content=jsonable_encoder(user_dict))
            else:
                raise HTTPException(status_code=404, detail="User not found")
    except Exception as e:
        print(f"Error: {e}")
        return HTTPException(status_code=500, detail="Internal Server Error")


@app.post("/user")
async def post_user(user_data: User):
    try:
        with conn.cursor() as cur:

            cur.execute(
                "INSERT INTO tb_user (username, email, password_key) VALUES (%s, %s, %s) RETURNING *;",
                (user_data.username, user_data.email, user_data.password)
            )
            conn.commit()
            inserted_data = cur.fetchone()

            if inserted_data:
                user_dict = {
                    "user_id": inserted_data[0],
                    "username": inserted_data[1],
                    "email": inserted_data[2],
                    "password": inserted_data[3]
                }

                return JSONResponse(content=jsonable_encoder(user_dict), status_code=201)
            else:
                raise HTTPException(status_code=500, detail="Failed to insert user")
    except Exception as e:
        print(f"Error: {e}")
        return HTTPException(status_code=500, detail="Internal Server Error")


# GAME ENDPOINTS-------------------------------------------------------------------------------#


@app.get("/games")
async def get_all_games():
    try:
        with conn.cursor() as cur:

            cur.execute("SELECT title, total_score, imageURL FROM tb_game;")
            games_data = cur.fetchall()

            games_list = []
            for game_data in games_data:
                game = ShortGame(title=game_data[0], total_score=game_data[1], imageURL=game_data[2])
                games_list.append(game)

            return JSONResponse(content=jsonable_encoder(games_list))
    except Exception as e:
        print(f"Error: {e}")
        return HTTPException(status_code=500, detail="Internal Server Error")


@app.get("/games/{category}")
async def get_games_by_category(category: str):
    try:
        with conn.cursor() as cur:

            cur.execute("SELECT title, total_score, imageURL FROM tb_game WHERE category = %s;", (category,))
            games_data = cur.fetchall()

            games_list = []
            for game_data in games_data:
                game = ShortGame(title=game_data[0], total_score=game_data[1], imageURL=game_data[2])
                games_list.append(game)

            return JSONResponse(content=jsonable_encoder(games_list))
    except Exception as e:
        print(f"Error: {e}")
        return HTTPException(status_code=500, detail="Internal Server Error")


@app.get("/game_by_title/{title}")
async def get_game_by_title(title: str):
    try:
        with conn.cursor() as cur:

            cur.execute("SELECT * FROM tb_game WHERE title = %s;", (title,))
            game_data = cur.fetchone()

            if game_data:
                game = Game(
                    game_id=game_data[0],
                    title=game_data[1],
                    developer=game_data[2],
                    total_score=game_data[3],
                    description=game_data[4],
                    category=game_data[5],
                    imageURL=game_data[6]
                )

                return JSONResponse(content=jsonable_encoder(game))
            else:
                raise HTTPException(status_code=404, detail="Game not found")
    except Exception as e:
        print(f"Error: {e}")
        return HTTPException(status_code=500, detail="Internal Server Error")


# RATING ENDPOINT-------------------------------------------------------------------------------#


@app.post("/rating")
async def add_rating(rating: Rating):
    try:
        with conn.cursor() as cur:

            cur.execute("SELECT * FROM tb_user WHERE user_id = %s;", (rating.user_id,))
            user_exists = cur.fetchone()

            cur.execute("SELECT * FROM tb_game WHERE game_id = %s;", (rating.game_id,))
            game_exists = cur.fetchone()

            if user_exists and game_exists:

                cur.execute("INSERT INTO tb_rating (user_id, game_id, score) VALUES (%s, %s, %s);",
                            (rating.user_id, rating.game_id, rating.score))
                conn.commit()

                return JSONResponse(content={"status": "success", "message": "Rating added successfully"})
            else:
                raise HTTPException(status_code=404, detail="User or game not found")
    except Exception as e:
        print(f"Error: {e}")
        return HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")