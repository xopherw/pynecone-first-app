import {useEffect, useState} from "react"
import {useRouter} from "next/router"
import {E, updateState} from "/utils/state"
import "focus-visible/dist/focus-visible"
import {Box, Container, HStack, Heading, Image, Link, SimpleGrid, Text, VStack} from "@chakra-ui/react"
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
<Box sx={{"display": ["none", "block", "block", "block"]}}>
<Container centerContent={true}>
<VStack spacing="1.5em"
sx={{"fontSize": "2em", "paddingTop": "10%"}}>
<Heading>
{`Welcome to Pycone site!`}</Heading>
<Image src="/images/me.jpg"
sx={{"borderRadius": "100%", "width": 300}}/>
<Box sx={{"paddingTop": 10, "width": "70%", "direction": "column"}}>
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
<NextLink passHref={true}
href="https://github.com/xopherw">
<Link sx={{"padding": "0.10em", "width": 75}}>
<Image src="/icons/github.png"/></Link></NextLink>
<NextLink passHref={true}
href="https://www.linkedin.com/in/chriswwl95/">
<Link sx={{"padding": "0.10em", "width": 75}}>
<Image src="/icons/linkedin.png"/></Link></NextLink>
<NextLink passHref={true}
href="mailto:chriswwl95@gmail.com">
<Link sx={{"padding": "0.10em", "width": 75}}>
<Image src="/icons/gmail.png"/></Link></NextLink>
<NextLink passHref={true}
href="https://medium.com/@chriswwl95">
<Link sx={{"padding": "0.10em", "width": 75}}>
<Image src="/icons/medium.png"/></Link></NextLink>
<NextLink passHref={true}
href="https://unsplash.com/@xopher">
<Link sx={{"padding": "0.10em", "width": 75}}>
<Image src="/icons/unsplash.png"/></Link></NextLink>
<NextLink passHref={true}
href="http://xopherw.duckdns.org">
<Link sx={{"padding": "0.10em", "width": 75}}>
<Image src="/icons/archive.png"/></Link></NextLink></HStack></VStack></Container></Box>
<Box sx={{"display": ["block", "none", "none", "none"]}}>
<Container>
<VStack spacing="1.5em"
sx={{"fontSize": "2em", "paddingTop": "10%"}}>
<Heading>
{`Welcome to Pycone site!`}</Heading>
<Image src="/images/me.jpg"
sx={{"borderRadius": "100%", "width": 300}}/>
<Box sx={{"paddingTop": 10, "fontSize": 18, "width": 250}}>
<Text>
{`Welcome to my Python web app! I am from Malaysia born in Kota Kinabalu, Sabah. I graduated as Mechanical Engineer from Iowa State University in 2018 and currently doing Master in Business Informatics in University of Canberra.`}</Text>
<Box sx={{"height": 10}}/>
<Text>
{`I have always been passionate about technology. This is an example of what Pycone framework can achieve with just Python language! In my free time I like to work on my personal coding project mainly with Ptyhon.`}</Text>
<Box sx={{"height": 10}}/>
<Text>
{`I also love learning new stuff and reading books. Anyway, I hope you enjoy my website, you may reach me in one of the medium below!`}</Text></Box>
<SimpleGrid spacing="10"
columns={[3]}
sx={{"padding": 15}}>
<NextLink passHref={true}
href="https://github.com/xopherw">
<Link sx={{"padding": "0.10em", "width": 10}}>
<Image src="/icons/github.png"/></Link></NextLink>
<NextLink passHref={true}
href="https://www.linkedin.com/in/chriswwl95/">
<Link sx={{"padding": "0.10em", "width": 10}}>
<Image src="/icons/linkedin.png"/></Link></NextLink>
<NextLink passHref={true}
href="mailto:chriswwl95@gmail.com">
<Link sx={{"padding": "0.10em", "width": 10}}>
<Image src="/icons/gmail.png"/></Link></NextLink>
<NextLink passHref={true}
href="https://medium.com/@chriswwl95">
<Link sx={{"padding": "0.10em", "width": 10}}>
<Image src="/icons/medium.png"/></Link></NextLink>
<NextLink passHref={true}
href="https://unsplash.com/@xopher">
<Link sx={{"padding": "0.10em", "width": 10}}>
<Image src="/icons/unsplash.png"/></Link></NextLink>
<NextLink passHref={true}
href="http://xopherw.duckdns.org">
<Link sx={{"padding": "0.10em", "width": 10}}>
<Image src="/icons/archive.png"/></Link></NextLink></SimpleGrid></VStack></Container></Box>
<NextHead>
<title>{`Pynecone App`}</title>
<meta content="favicon.ico"
name="description"/>
<meta content="A Pynecone app."
property="og:image"/></NextHead></Box>
)
}