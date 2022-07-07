import { Text, Flex,SimpleGrid,Box } from "@chakra-ui/react";
import TopThreeBar from "./TopThreeBar";


const TopThreeBarChart = () => {
 
  const TopThreeData = {
    Distance: [             
      {
       name: "car",
          count: 652
   },
      {
        name: "bus",
       count: 254
   },
      {
        name: "walk",
         count: 150
   }
    ],
  TripCount: [     
    {
      name: "train",
         count: 350
      },
    {
      name: "car",
        count: 562
  },
    {
      name: "walk",
         count: 103
   }
  ],
     Emission: [
        {
         count: 956,
         name: "bus"
         },
         {
            count: 1231,
            name: "car"
          },
        {
         count: 0,
         name: "walk"
       }
     ],
  };
  
 // sort by Distance (ascending)
  const distanceBarData = TopThreeData.Distance.sort((a, b) => b.count - a.count);

 
// sort by TripCount (ascending)
  const tripCountBarData = TopThreeData.TripCount.sort((a, b) => b.count - a.count);

// sort by Emission (ascending)
const emissionBarData =  TopThreeData.Emission.sort((a, b) => b.count - a.count);

return (
  <>
    {/* <Box>
      <Text>
        Distance,Trip count,Emission stats 
      </Text>
    </Box> */}
    <Flex direction="column">
      <Flex
        mt={5}
        width={["268px", "480px"]}
        justify={["center", "left"]}
        mb="15px"
      >
        <Text fontSize="18px">
         Top three
        </Text>
        </Flex>
        
    {/*TopThree state of bar */}
    {/* const individualStateBar = TopThreeData.map(
    ) */}

      {/* <SimpleGrid columns={3} spacingX="20px" spacingY="20px"> */}
      {/* {TopThreeData.map((item, id) => ( */}
         
          <Flex justify="center" direction="row">
          {/* distance  */}
          
        <Flex   width={["168px", "180px"]} height={["153px", "223px"]}>

          <TopThreeBar title="Distance" data={distanceBarData} />
          
</Flex>
       
       
        {/* <Icon as={transportIcon[ind]} fontSize={"20px"} /> */}
        <Flex width={["168px", "180px"]} height={["153px", "223px"]}>
        </Flex>
        <Flex   width={["168px", "180px"]} height={["153px", "223px"]}>
            <TopThreeBar title="TripCount" data={tripCountBarData} />
            </Flex>
      
        
          <TopThreeBar title="Emission" data={emissionBarData} />
            
            
          </Flex>
      {/* </SimpleGrid> */}
      </Flex>
    </>
  );
};

export default TopThreeBarChart;
