import {useEffect, useState} from "react"
import {useRouter} from "next/router"
import {E, updateState} from "/utils/state"
import "focus-visible/dist/focus-visible"
import {Box, Container, HStack, Heading, Image, Link, Text, VStack} from "@chakra-ui/react"
import NextLink from "next/link"
import NextHead from "next/head"

const EVENT = "http://localhost:8000/event"
export default function Component() {
const [state, setState] = useState({"events": [{"name": "state.hydrate"}]})
const [result, setResult] = useState({"state": null, "events": [], "processing": false})
const router = useRouter()
const Event = events => setState({
  ...state,
  events: [...state.events, ...events],
})
useEffect(() => {
  const update = async () => {
    if (result.state != null) {
      setState({
        ...result.state,
        events: [...state.events, ...result.events],
      })
      setResult({
        state: null,
        events: [],
        processing: false,
      })
    }
    await updateState(state, result, setResult, EVENT, router)
  }
  update()
})
return (
<Box>
<Container centerContent={true}>
<VStack spacing="1.5em"
sx={{"fontSize": "2em", "paddingTop": "10%"}}>
<Heading>
{`Welcome to Pycone site!`}</Heading>
<Image src="/images/me.jpg"
sx={{"borderRadius": "100%", "width": 300}}/>
<Box sx={{"paddingTop": 10, "width": "87%"}}>
<Text>
{`Welcome to my Python web app! I am from Malaysia born in Kota Kinabalu, Sabah. I graduated as Mechanical Engineer from Iowa State University in 2018 and currently doing Master in Business Informatics in University of Canberra.`}</Text>
<Box sx={{"height": 10}}/>
<Text>
{`I have always been passionate about technology. This is an example of what Pycone framework can achieve with just Python language! In my free time I like to work on my personal coding project mainly with Ptyhon.`}</Text>
<Box sx={{"height": 10}}/>
<Text>
{`I also love learning new stuff and reading books. Anyway, I hope you enjoy my website, you may reach me in one of the medium below!`}</Text></Box>
<HStack spacing="10"
sx={{"padding": 150}}>
<NextLink href="https://github.com/xopherw"
passHref={true}>
<Link sx={{"padding": "0.10em", "width": 75}}>
<Image src="/icons/github.png"/></Link></NextLink>
<NextLink href="https://www.linkedin.com/in/chriswwl95/"
passHref={true}>
<Link sx={{"padding": "0.10em", "width": 75}}>
<Image src="/icons/linkedin.png"/></Link></NextLink>
<NextLink href="mailto:chriswwl95@gmail.com"
passHref={true}>
<Link sx={{"padding": "0.10em", "width": 75}}>
<Image src="/icons/gmail.png"/></Link></NextLink>
<NextLink href="https://medium.com/@chriswwl95"
passHref={true}>
<Link sx={{"padding": "0.10em", "width": 75}}>
<Image src="/icons/medium.png"/></Link></NextLink>
<NextLink href="https://unsplash.com/@xopher"
passHref={true}>
<Link sx={{"padding": "0.10em", "width": 75}}>
<Image src="/icons/unsplash.png"/></Link></NextLink>
<NextLink href="http://xopherw.duckdns.org"
passHref={true}>
<Link sx={{"padding": "0.10em", "width": 75}}>
<Image src="/icons/archive.png"/></Link></NextLink></HStack></VStack></Container>
<NextHead>
<title>{`Pynecone App`}</title>
<meta name="description"
content="favicon.ico"/>
<meta property="og:image"
content="A Pynecone app."/></NextHead></Box>
)
}