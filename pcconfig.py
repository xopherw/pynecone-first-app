import pynecone as pc


config = pc.Config(
    app_name="first_app",
    api_url="203.43.150.2:8000"
    bun_path="$HOME/.bun/bin/bun",
    db_url="sqlite:///pynecone.db",
    env=pc.Env.DEV,
)
