import React from 'react';
import {
    Category,
    Component,
    Variant,
    Palette,
} from '@react-buddy/ide-toolbox';
import {
    Badge,
    Box,
    Button,
    ButtonGroup,
    Center,
    Checkbox,
    Circle,
    Container,
    Editable,
    EditableInput,
    EditablePreview,
    EditableTextarea,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    HStack,
    IconButton,
    Input,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    PinInput,
    PinInputField,
    Radio,
    RadioGroup,
    RangeSlider,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    RangeSliderTrack,
    Select,
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
    Square,
    Stack,
    Switch,
    Textarea,
    Text,
    Grid,
    GridItem,
    SimpleGrid,
    VStack,
    WrapItem,
    Wrap,
    Code,
    Divider,
    Kbd,
    UnorderedList,
    ListItem,
    OrderedList,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatGroup,
    StatArrow,
    TableContainer,
    Table,
    TableCaption,
    Thead,
    Td,
    Tr,
    Tbody,
    Th,
    Tfoot,
    Tag,
    TagLabel,
    TagLeftIcon,
    TagCloseButton,
    Alert,
    AlertIcon,
    CircularProgress,
    CircularProgressLabel, Progress, Skeleton, SkeletonCircle, SkeletonText, Spinner, useToast
} from "@chakra-ui/react";
import {AddIcon, EmailIcon, SearchIcon} from "@chakra-ui/icons";
import {VariantRoute} from "@react-buddy/ide-toolbox/dist/palette/variant-route";

export const PaletteTree = () => (
    <Palette>
        <Category name="Layout">
            <Component name="Box">
                <Variant>
                    <Box bg='tomato' w='100%' p={4} color='white'>
                        This is the Box
                    </Box>
                </Variant>
            </Component>
            <Component name="Center">
                <Variant>
                    <Center bg='tomato' w='100%' h='100px' color='white'>
                        This is the Center
                    </Center>
                </Variant>
            </Component>
            <Component name="Circle">
                <Variant>
                    <Circle size='40px' bg='tomato' color='white'>
                        1
                    </Circle>
                </Variant>
            </Component>
            <Component name="Square">
                <Variant>
                    <Square size='40px' bg='purple.700' color='white'>
                        2
                    </Square>
                </Variant>
            </Component>
            <Component name="Container">
                <Variant>
                    <Container>
                        There are many benefits to a joint design and development system. Not only
                        does it bring benefits to the design team, but it also brings benefits to
                        engineering teams. It makes sure that our experiences have a consistent look
                        and feel, not just in our design specs, but in production
                    </Container>
                </Variant>
            </Component>
            <Component name="Flex">
                <Variant>
                    <Flex color='white'>
                        <Center w='100px' bg='green.500'>
                            <Text>Box 1</Text>
                        </Center>
                        <Square bg='blue.500' size='150px'>
                            <Text>Box 2</Text>
                        </Square>
                        <Box flex='1' bg='tomato'>
                            <Text>Box 3</Text>
                        </Box>
                    </Flex>
                </Variant>
            </Component>
            <Component name="Grid">
                <Variant>
                    <Grid
                        h='200px'
                        w='100%'
                        templateRows='repeat(2, 1fr)'
                        templateColumns='repeat(5, 1fr)'
                        gap={4}
                    >
                        <GridItem rowSpan={2} colSpan={1} bg='tomato'/>
                        <GridItem colSpan={2} bg='papayawhip'/>
                        <GridItem colSpan={2} bg='papayawhip'/>
                        <GridItem colSpan={4} bg='tomato'/>
                    </Grid>
                </Variant>
            </Component>
            <Component name="SimpleGrid">
                <Variant>
                    <SimpleGrid columns={2} spacing={10} w='100%'>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                    </SimpleGrid>
                </Variant>
            </Component>
            <Component name="HStack">
                <Variant>
                    <HStack spacing='24px'>
                        <Box w='40px' h='40px' bg='green.100'>1</Box>
                        <Box w='40px' h='40px' bg='green.100'>2</Box>
                        <Box w='40px' h='40px' bg='green.100'>3</Box>
                    </HStack>
                </Variant>
            </Component>
            <Component name="VStack">
                <Variant>
                    <VStack spacing='24px'>
                        <Box w='40px' h='40px' bg='green.100'>1</Box>
                        <Box w='40px' h='40px' bg='green.100'>2</Box>
                        <Box w='40px' h='40px' bg='green.100'>3</Box>
                    </VStack>
                </Variant>
            </Component>
            <Component name="Wrap">
                <Variant>
                    <Wrap>
                        <WrapItem>
                            <Center w='180px' h='80px' bg='red.200'>
                                Box 1
                            </Center>
                        </WrapItem>
                        <WrapItem>
                            <Center w='180px' h='80px' bg='green.200'>
                                Box 2
                            </Center>
                        </WrapItem>
                        <WrapItem>
                            <Center w='180px' h='80px' bg='tomato'>
                                Box 3
                            </Center>
                        </WrapItem>
                        <WrapItem>
                            <Center w='180px' h='80px' bg='blue.200'>
                                Box 4
                            </Center>
                        </WrapItem>
                    </Wrap>
                </Variant>
            </Component>
        </Category>
        <Category name="Forms">
            <Component name="Button">
                <Variant>
                    <Button>Button</Button>
                </Variant>
                <Variant name="outline">
                    <Button variant='outline'>Button</Button>
                </Variant>
                <Variant name="ghost">
                    <Button variant='ghost'>Button</Button>
                </Variant>
                <Variant name="link">
                    <Button variant='link'>Button</Button>
                </Variant>
                <Variant name="with icon">
                    <Button leftIcon={<EmailIcon/>} colorScheme='teal' variant='solid'>Email</Button>
                </Variant>
                <Variant name="is loading">
                    <Button
                        isLoading
                        loadingText='Submitting'
                        colorScheme='teal'
                        variant='outline'>Submit</Button>
                </Variant>
                <Variant name="large">
                    <Button size='lg'>Button</Button>
                </Variant>
                <Variant name="small">
                    <Button size='sm'>Button</Button>
                </Variant>
                <Variant name="extra small">
                    <Button size='xs'>Button</Button>
                </Variant>
                <Variant name="button group">
                    <ButtonGroup variant='outline' spacing='6'>
                        <Button colorScheme='blue'>Save</Button>
                        <Button>Cancel</Button>
                    </ButtonGroup>
                </Variant>
            </Component>
            <Component name="Checkbox">
                <Variant>
                    <Checkbox defaultChecked>Checkbox</Checkbox>
                </Variant>
                <Variant name="small">
                    <Checkbox size='sm' colorScheme='red'>
                        Checkbox
                    </Checkbox>
                </Variant>
                <Variant name="large">
                    <Checkbox size='lg' colorScheme='orange' defaultChecked>
                        Checkbox
                    </Checkbox>
                </Variant>
            </Component>
            <Component name="Editable">
                <Variant name="input">
                    <Editable defaultValue='Take some chakra'>
                        <EditablePreview/>
                        <EditableInput/>
                    </Editable>
                </Variant>
                <Variant name="textarea">
                    <Editable defaultValue='Take some chakra'>
                        <EditablePreview/>
                        <EditableTextarea/>
                    </Editable>
                </Variant>
            </Component>
            <Component name="FormControl">
                <Variant>
                    <FormControl>
                        <FormLabel htmlFor='email'>Email address</FormLabel>
                        <Input id='email' type='email'/>
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>
                </Variant>
            </Component>
            <Component name="IconButton">
                <Variant>
                    <IconButton aria-label='Search database' icon={<SearchIcon/>}/>
                </Variant>
            </Component>
            <Component name="Input">
                <Variant>
                    <Input placeholder='Basic usage'/>
                </Variant>
                <Variant name="outline">
                    <Input variant='outline' placeholder='Outline'/>
                </Variant>
                <Variant name="filled">
                    <Input variant='filled' placeholder='Filled'/>
                </Variant>
                <Variant name="flushed">
                    <Input variant='flushed' placeholder='Flushed'/>
                </Variant>
                <Variant name="unstyled">
                    <Input variant='unstyled' placeholder='Unstyled'/>
                </Variant>
                <Variant name="password">
                    <Input pr='4.5rem' type='password' placeholder='Enter password'/>
                </Variant>
            </Component>
            <Component name="NumberInput">
                <Variant>
                    <NumberInput step={5} defaultValue={15} min={10} max={30}>
                        <NumberInputField/>
                        <NumberInputStepper>
                            <NumberIncrementStepper/>
                            <NumberDecrementStepper/>
                        </NumberInputStepper>
                    </NumberInput>
                </Variant>
            </Component>
            <Component name="PinInput">
                <Variant>
                    <HStack>
                        <PinInput>
                            <PinInputField/>
                            <PinInputField/>
                            <PinInputField/>
                            <PinInputField/>
                        </PinInput>
                    </HStack>
                </Variant>
            </Component>
            <Component name="RadioGroup">
                <Variant>
                    <RadioGroup>
                        <Stack direction='row'>
                            <Radio value='1'>First</Radio>
                            <Radio value='2'>Second</Radio>
                            <Radio value='3'>Third</Radio>
                        </Stack>
                    </RadioGroup>
                </Variant>
            </Component>
            <Component name="RangeSlider">
                <Variant>
                    <RangeSlider
                        aria-label={['min', 'max']}
                        colorScheme='pink'
                        defaultValue={[10, 30]}
                    >
                        <RangeSliderTrack>
                            <RangeSliderFilledTrack/>
                        </RangeSliderTrack>
                        <RangeSliderThumb index={0}/>
                        <RangeSliderThumb index={1}/>
                    </RangeSlider>
                </Variant>
            </Component>
            <Component name="Select">
                <Variant>
                    <Select placeholder='Select option'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </Variant>
                <Variant name="outline">
                    <Select variant='outline' placeholder='Outline'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </Variant>
                <Variant name="filled">
                    <Select variant='filled' placeholder='Filled'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </Variant>
                <Variant name="flushed">
                    <Select variant='flushed' placeholder='Flushed'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </Variant>
                <Variant name="unstyled">
                    <Select variant='unstyled' placeholder='Unstyled'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </Variant>
            </Component>
            <Component name="Slider">
                <Variant>
                    <Slider aria-label='slider-ex-1' defaultValue={30}>
                        <SliderTrack>
                            <SliderFilledTrack/>
                        </SliderTrack>
                        <SliderThumb/>
                    </Slider>
                </Variant>
            </Component>
            <Component name="Switch">
                <Variant>
                    <Switch/>
                </Variant>
                <Variant name="small">
                    <Switch size='sm'/>
                </Variant>
                <Variant name="large">
                    <Switch size='lg'/>
                </Variant>
            </Component>
            <Component name="Textarea">
                <Variant>
                    <Textarea placeholder='Here is a sample placeholder'/>
                </Variant>
            </Component>
        </Category>
        <Category name="Data Display">
            <Component name="Badge">
                <Variant>
                    <Badge>Default</Badge>
                </Variant>
                <Variant name="outline">
                    <Badge variant='outline' colorScheme='green'>Default</Badge>
                </Variant>
                <Variant name="solid">
                    <Badge variant='solid' colorScheme='green'>Success</Badge>
                </Variant>
                <Variant name="subtle">
                    <Badge variant='subtle' colorScheme='green'>Removed</Badge>
                </Variant>
                <Variant name="green">
                    <Badge colorScheme='green'>Success</Badge>
                </Variant>
                <Variant name="red">
                    <Badge colorScheme='red'>Removed</Badge>
                </Variant>
                <Variant name="purple">
                    <Badge colorScheme='purple'>New</Badge>
                </Variant>
            </Component>
            <Component name="Code">
                <Variant>
                    <Code>Hello world</Code>
                </Variant>
            </Component>
            <Component name="Divider">
                <Variant name="horizontal">
                    <Divider orientation='horizontal'/>
                </Variant>
                <Variant name="vertical">
                    <Divider orientation='vertical'/>
                </Variant>
            </Component>
            <Component name="Kbd">
                <Variant>
                    <span>
                        <Kbd>shift</Kbd> + <Kbd>H</Kbd>
                    </span>
                </Variant>
            </Component>
            <Component name="List">
                <Variant name="unordered">
                    <UnorderedList>
                        <ListItem>Lorem ipsum dolor sit amet</ListItem>
                        <ListItem>Consectetur adipiscing elit</ListItem>
                        <ListItem>Integer molestie lorem at massa</ListItem>
                        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                    </UnorderedList>
                </Variant>
                <Variant name="ordered">
                    <OrderedList>
                        <ListItem>Lorem ipsum dolor sit amet</ListItem>
                        <ListItem>Consectetur adipiscing elit</ListItem>
                        <ListItem>Integer molestie lorem at massa</ListItem>
                        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                    </OrderedList>
                </Variant>
            </Component>
            <Component name="Stat">
                <Variant>
                    <Stat>
                        <StatLabel>Collected Fees</StatLabel>
                        <StatNumber>£0.00</StatNumber>
                        <StatHelpText>Feb 12 - Feb 28</StatHelpText>
                    </Stat>
                </Variant>
                <Variant name="with indicator">
                    <StatGroup>
                        <Stat>
                            <StatLabel>Sent</StatLabel>
                            <StatNumber>345,670</StatNumber>
                            <StatHelpText>
                                <StatArrow type='increase'/>
                                23.36%
                            </StatHelpText>
                        </Stat>

                        <Stat>
                            <StatLabel>Clicked</StatLabel>
                            <StatNumber>45</StatNumber>
                            <StatHelpText>
                                <StatArrow type='decrease'/>
                                9.05%
                            </StatHelpText>
                        </Stat>
                    </StatGroup>
                </Variant>
            </Component>
            <Component name="Table">
                <Variant>
                    <TableContainer>
                        <Table variant='simple'>
                            <TableCaption>Imperial to metric conversion factors</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>To convert</Th>
                                    <Th>into</Th>
                                    <Th isNumeric>multiply by</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>inches</Td>
                                    <Td>millimetres (mm)</Td>
                                    <Td isNumeric>25.4</Td>
                                </Tr>
                                <Tr>
                                    <Td>feet</Td>
                                    <Td>centimetres (cm)</Td>
                                    <Td isNumeric>30.48</Td>
                                </Tr>
                                <Tr>
                                    <Td>yards</Td>
                                    <Td>metres (m)</Td>
                                    <Td isNumeric>0.91444</Td>
                                </Tr>
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th>To convert</Th>
                                    <Th>into</Th>
                                    <Th isNumeric>multiply by</Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                    </TableContainer>
                </Variant>
                <Variant name="Striped">
                    <TableContainer>
                        <Table variant='striped' colorScheme='teal'>
                            <TableCaption>Imperial to metric conversion factors</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>To convert</Th>
                                    <Th>into</Th>
                                    <Th isNumeric>multiply by</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>inches</Td>
                                    <Td>millimetres (mm)</Td>
                                    <Td isNumeric>25.4</Td>
                                </Tr>
                                <Tr>
                                    <Td>feet</Td>
                                    <Td>centimetres (cm)</Td>
                                    <Td isNumeric>30.48</Td>
                                </Tr>
                                <Tr>
                                    <Td>yards</Td>
                                    <Td>metres (m)</Td>
                                    <Td isNumeric>0.91444</Td>
                                </Tr>
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th>To convert</Th>
                                    <Th>into</Th>
                                    <Th isNumeric>multiply by</Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                    </TableContainer>
                </Variant>
            </Component>
            <Component name="Tag">
                <Variant>
                    <Tag>Sample Tag</Tag>
                </Variant>
                <Variant name="with icon">
                    <Tag variant='subtle' colorScheme='cyan'>
                        <TagLeftIcon boxSize='12px' as={AddIcon}/>
                        <TagLabel>Cyan</TagLabel>
                    </Tag>
                </Variant>
                <Variant name="with close button">
                    <Tag
                        borderRadius='full'
                        variant='solid'
                        colorScheme='green'
                    >
                        <TagLabel>Green</TagLabel>
                        <TagCloseButton/>
                    </Tag>
                </Variant>
            </Component>
        </Category>
        <Category name="Feedback">
            <Component name="Alert">
                <Variant>
                    <Alert status='success' variant='subtle'>
                        <AlertIcon/>
                        Data uploaded to the server. Fire on!
                    </Alert>
                </Variant>
                <Variant name="solid">
                    <Alert status='success' variant='solid'>
                        <AlertIcon/>
                        Data uploaded to the server. Fire on!
                    </Alert>
                </Variant>
                <Variant name="left-accent">
                    <Alert status='success' variant='left-accent'>
                        <AlertIcon/>
                        Data uploaded to the server. Fire on!
                    </Alert>
                </Variant>
                <Variant name="top-accent">
                    <Alert status='success' variant='top-accent'>
                        <AlertIcon/>
                        Data uploaded to the server. Fire on!
                    </Alert>
                </Variant>
                <Variant name="error">
                    <Alert status='error'>
                        <AlertIcon/>
                        There was an error processing your request
                    </Alert>
                </Variant>
                <Variant name="warning">
                    <Alert status='warning'>
                        <AlertIcon/>
                        Seems your account is about expire, upgrade now
                    </Alert>
                </Variant>
                <Variant name="info">
                    <Alert status='info'>
                        <AlertIcon/>
                        Chakra is going live on August 30th. Get ready!
                    </Alert>
                </Variant>
            </Component>
            <Component name="CircularProgress">
                <Variant>
                    <CircularProgress value={80} />
                </Variant>
                <Variant name="with label">
                    <CircularProgress value={40} color='green.400'>
                        <CircularProgressLabel>40%</CircularProgressLabel>
                    </CircularProgress>
                </Variant>
                <Variant name="indeterminate">
                    <CircularProgress isIndeterminate color='green.300' />
                </Variant>
            </Component>
            <Component name="Progress">
                <Variant>
                    <Progress value={80} w='100%'/>
                </Variant>
                <Variant name="indeterminate">
                    <Progress size='xs' w='100%' isIndeterminate />
                </Variant>
            </Component>
            <Component name="Skeleton">
                <Variant>
                    <Stack>
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />
                    </Stack>
                </Variant>
                <Variant name="circle and text">
                    <Box padding='6' boxShadow='lg' bg='white' w='100%'>
                        <SkeletonCircle size='10' />
                        <SkeletonText mt='4' noOfLines={4} spacing='4' />
                    </Box>
                </Variant>
            </Component>
            <Component name="Spinner">
                <Variant>
                    <Spinner/>
                </Variant>
            </Component>
            <Component name="Toast">
                <Variant proto={ToastProto}/>
            </Component>
        </Category>
    </Palette>
);


export function ToastProto() {
    const toast = useToast()
    return (
        <Button
            onClick={() =>
                toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
            }
        >
            Show Toast
        </Button>
    )
}
