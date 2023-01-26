import pynecone as pc


config = pc.Config(
    app_name="xopherw",
    api_url="0.0.0.0:8443",
    bun_path="$HOME/.bun/bin/bun",
    db_url="sqlite:///pynecone.db",
#     env=pc.Env.DEV,
)
