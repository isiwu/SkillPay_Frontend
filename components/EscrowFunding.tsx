import {Box, Button, Center, Checkbox, Flex, FormControl, HStack, Input, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link';

function EscrowFunding(){
  return (
      <SimpleGrid spacing="10" gap={"5"}>
    <Flex flexDir={["column","column", "row"]} alignItems={["flex-start"]} gap="5" w={"full"} py="5"  >
    <Box p="2" gap="10">
        <Text className='text-primary font-bold'>  
        Deposit funds
        </Text>
        <Flex justifyContent={"space-between"}>
        <Text className='space-x-1 text-sm text-primary font-bold'>
         Amount
        </Text>
        <Text className='space-x-1 text-sm rounded-md'>
         $3500
        </Text>
        </Flex>
    <Box gap="2">
        <Text className='space-x-1 text-sm rounded-md'p={"2"}>
        Wallet address 
        </Text>
        <FormControl >
             <Input placeholder="0xef507f72297e30B31............." w={"600px"} size="md" bg={"white"} />
        </FormControl>
        <Checkbox value='Negotiable'>By connecting wallet, I agree to our <Link href={"#"}>Escrow contract</Link></Checkbox>
      </Box>
    </Box>
</Flex>
    <Center justifyContent={"center"} >
        <Button  type="submit" bg="#F24726" alignSelf={"center"} w="200px" colorScheme={"orange"}>
        Connect Wallet
        </Button>
        </Center>
    </SimpleGrid>
  )
}

export default EscrowFunding;