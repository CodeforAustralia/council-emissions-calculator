import { Progress } from "@chakra-ui/react"

export default function OurProgressBar({progressValue}) {
    return <Progress value={progressValue} size="md" width={"80%"} />
}