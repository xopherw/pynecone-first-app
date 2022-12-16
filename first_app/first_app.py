"""Welcome to Pynecone! This file outlines the steps to create a basic app."""
from pcconfig import config

import pynecone as pc
# import desktop as dtop


class State(pc.State):
    """The app state."""

    pass


box_style = {
    "padding": "0.10em",
    "width": 75,
}

mobile_box_style = {
    
    "padding": "0.10em",
    "width": 10,

}

def desktop():
    return pc.tablet_and_desktop(
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
                    pc.text(
                        "I also love learning new stuff and reading books. Anyway, I hope you enjoy my website, you may reach me in one of the medium below!"),
                    padding_top=10,
                    width="70%",
                    direction="column",
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


def mobile():
    return pc.mobile_only(
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
                    pc.text(
                        "I also love learning new stuff and reading books. Anyway, I hope you enjoy my website, you may reach me in one of the medium below!"),
                    padding_top=10,
                    font_size=18,
                    width=250
                ),

                pc.responsive_grid(
                    pc.link(
                        pc.image(src="/icons/github.png"),
                        href="https://github.com/xopherw",
                        style=mobile_box_style
                    ),
                    pc.link(
                        pc.image(src="/icons/linkedin.png"),
                        href="https://www.linkedin.com/in/chriswwl95/",
                        style=mobile_box_style
                    ),
                    pc.link(
                        pc.image(src="/icons/gmail.png"),
                        href="mailto:chriswwl95@gmail.com",
                        style=mobile_box_style,
                    ),
                    pc.link(
                        pc.image(src="/icons/medium.png"),
                        href="https://medium.com/@chriswwl95",
                        style=mobile_box_style,
                    ),
                    pc.link(
                        pc.image(src="/icons/unsplash.png"),
                        href="https://unsplash.com/@xopher",
                        style=mobile_box_style,
                    ),
                    pc.link(
                        pc.image(src="/icons/archive.png"),
                        href="http://xopherw.duckdns.org",
                        style=mobile_box_style,
                    ),
                    padding=15,
                    spacing="10",
                    columns=[3]
                ),

                spacing="1.5em",
                font_size="2em",
                padding_top="10%",

            ),
        )
    )


def index():
    return pc.box(
        desktop(),
        mobile()
    )


# Add state and page to the app.
app = pc.App(state=State)
app.add_page(index)
app.compile()
