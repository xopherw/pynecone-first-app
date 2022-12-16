"""Welcome to Pynecone! This file outlines the steps to create a basic app."""
from pcconfig import config

import pynecone as pc

docs_url = "https://pynecone.io/docs/getting-started/introduction"

box_style = {
    "padding":"0.10em",
    "width" : 75,

}



class State(pc.State):
    """The app state."""

    pass


def index():
    return pc.box(
        pc.container(
            pc.vstack(
                pc.heading(
                    "Welcome to Pycone site!",
                    ),

                pc.image(
                    src="/images/me.jpg", 
                    border_radius="100%",
                    width=300,
                    ),                
                    
                pc.box(
                    pc.text("Welcome to my Python web app! I am from Malaysia born in Kota Kinabalu, Sabah. I graduated as Mechanical Engineer from Iowa State University in 2018 and currently doing Master in Business Informatics in University of Canberra."),
                    pc.box(height=10),
                    pc.text("I have always been passionate about technology. This is an example of what Pycone framework can achieve with just Python language! In my free time I like to work on my personal coding project mainly with Ptyhon."),
                    pc.box(height=10),
                    pc.text("I also love learning new stuff and reading books. Anyway, I hope you enjoy my website, you may reach me in one of the medium below!"),
                    padding_top=10,
                    width="87%"
                    ),
                
                pc.hstack(
                    pc.link(
                        pc.image(src="/icons/github.png"),
                        href="https://github.com/xopherw", 
                        style=box_style
                        ),
                    pc.link(
                        pc.image(src="/icons/linkedin.png"),
                        href="https://www.linkedin.com/in/chriswwl95/",
                        style=box_style
                        ),
                    pc.link(
                        pc.image(src="/icons/gmail.png"),
                        href="mailto:chriswwl95@gmail.com",
                        style=box_style,
                        ),
                    pc.link(
                        pc.image(src="/icons/medium.png"),
                        href="https://medium.com/@chriswwl95",
                        style=box_style,
                        ),
                    pc.link(
                        pc.image(src="/icons/unsplash.png"),
                        href="https://unsplash.com/@xopher",
                        style=box_style,
                        ),
                    pc.link(
                        pc.image(src="/icons/archive.png"),
                        href="http://xopherw.duckdns.org",
                        style=box_style,
                        ),
                    padding=150,
                    spacing="10"
                    ),            

                spacing="1.5em",
                font_size="2em",
                padding_top="10%",
                
            ),
            center_content=True
        )
    )
    


# Add state and page to the app.
app = pc.App(state=State)
app.add_page(index)
app.compile()
