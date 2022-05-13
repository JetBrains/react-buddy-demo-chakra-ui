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
    Button, ButtonGroup,
    Center,
    Checkbox,
    Circle,
    Container,
    Editable, EditableInput,
    EditablePreview, EditableTextarea, FormControl, FormHelperText, FormLabel, IconButton, Input,
    Square
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
