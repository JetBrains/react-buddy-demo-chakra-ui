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
    EditableTextarea, Flex,
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
    RangeSliderFilledTrack, RangeSliderThumb,
    RangeSliderTrack, Select, Slider, SliderFilledTrack, SliderThumb, SliderTrack,
    Square,
    Stack,
    Switch,
    Textarea,
    Text, Grid, GridItem, SimpleGrid, VStack, WrapItem, Wrap
} from "@chakra-ui/react";
import {EmailIcon, SearchIcon} from "@chakra-ui/icons";

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
                        <GridItem rowSpan={2} colSpan={1} bg='tomato' />
                        <GridItem colSpan={2} bg='papayawhip' />
                        <GridItem colSpan={2} bg='papayawhip' />
                        <GridItem colSpan={4} bg='tomato' />
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
                    <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>Email</Button>
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
                        <EditablePreview />
                        <EditableInput />
                    </Editable>
                </Variant>
                <Variant name="textarea">
                    <Editable defaultValue='Take some chakra'>
                        <EditablePreview />
                        <EditableTextarea />
                    </Editable>
                </Variant>
            </Component>
            <Component name="FormControl">
                <Variant>
                    <FormControl>
                        <FormLabel htmlFor='email'>Email address</FormLabel>
                        <Input id='email' type='email' />
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>
                </Variant>
            </Component>
            <Component name="IconButton">
                <Variant>
                    <IconButton aria-label='Search database' icon={<SearchIcon />} />
                </Variant>
            </Component>
            <Component name="Input">
                <Variant>
                    <Input placeholder='Basic usage' />
                </Variant>
                <Variant name="outline">
                    <Input variant='outline' placeholder='Outline' />
                </Variant>
                <Variant name="filled">
                    <Input variant='filled' placeholder='Filled' />
                </Variant>
                <Variant name="flushed">
                    <Input variant='flushed' placeholder='Flushed' />
                </Variant>
                <Variant name="unstyled">
                    <Input variant='unstyled' placeholder='Unstyled' />
                </Variant>
                <Variant name="password">
                    <Input pr='4.5rem' type='password' placeholder='Enter password'/>
                </Variant>
            </Component>
            <Component name="NumberInput">
                <Variant>
                    <NumberInput step={5} defaultValue={15} min={10} max={30}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </Variant>
            </Component>
            <Component name="PinInput">
                <Variant>
                    <HStack>
                        <PinInput>
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
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
                            <RangeSliderFilledTrack />
                        </RangeSliderTrack>
                        <RangeSliderThumb index={0} />
                        <RangeSliderThumb index={1} />
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
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </Variant>
            </Component>
            <Component name="Switch">
                <Variant>
                    <Switch />
                </Variant>
                <Variant name="small">
                    <Switch size='sm' />
                </Variant>
                <Variant name="large">
                    <Switch size='lg' />
                </Variant>
            </Component>
            <Component name="Textarea">
                <Variant>
                    <Textarea placeholder='Here is a sample placeholder' />
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
        </Category>
    </Palette>
);
