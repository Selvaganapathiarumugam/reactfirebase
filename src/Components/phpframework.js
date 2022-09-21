import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import php from '../assets/icon-php.svg';
import { Container } from '@mui/system';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dashboard from './header';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function phpframework() {
    return (
        <>
        <Dashboard />
            <Paper elevation={3}>
                <Grid container spacing={2}>
                    <Grid item xs={0} sx={{ margin: 'auto' }}>
                        <ImageList sx={{ width: 400, height: 200 }} >
                            <ImageListItem>
                                <img src={php} srcSet={php} alt='php'  />
                            </ImageListItem>
                        </ImageList>
                    </Grid>
                </Grid>
                <Container>
                    <Row>
                    <Col>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography variant='h5' component='div'>
                                        Laravel
                                    </Typography>
                                    <Typography
                                        sx={{ mb: 1.5, textAlign: 'justify' }}
                                        color='text.secondary'
                                    >
                                        Laravel attempts to take the pain out of development by
                                        easing common tasks used in the majority of web projects,
                                        such as authentication, routing, sessions, and caching.
                                        Laravel aims to make the development process a pleasing one
                                        for the developer without sacrificing application
                                        functionality.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        variant='outlined'
                                        size='small'
                                        href='https://laravel.com/'
										color="secondary"

                                    >
                                        Learn More{' '}
                                    </Button>
                                </CardActions>
                            </Card>
                            </Col>

                            <Col>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography variant='h5' component='div'>
                                        CodeIgniter
                                    </Typography>
                                    <Typography
                                        sx={{ mb: 1.5, textAlign: 'justify' }}
                                        color='text.secondary'
                                    >
                                        CodeIgniter allows any business to migrate from one server
                                        to another if we consider database migration and updates.
                                        The companies currently using Codeigniter are Udemy, Medical
                                          to name a few. They employ this
                                        framework as it renders sufficient migration support and is
                                        easy to use.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        variant='outlined'
                                        size='small'
                                        href='https://codeigniter.com//'
                                        
                                    >
                                        Learn More{' '}
                                    </Button>
                                </CardActions>
                            </Card>
                            </Col>

                            <Col>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography variant='h5' component='div'>
                                        Yii
                                    </Typography>
                                    <Typography
                                        sx={{ mb: 1.5, textAlign: 'justify' }}
                                        color='text.secondary'
                                    >
                                        Yii is a high-performance, component-based PHP framework for
                                        developing large-scale Web applications rapidly. It enables
                                        maximum reusability in Web programming and can significantly
                                        accelerate your Web application development process. The
                                        name Yii (pronounced Yee or [ji:] ) 
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        variant='text'
                                        size='small'
                                        href='https://www.yiiframework.com/'
										
                                    >
                                        Learn More{' '}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Paper>
        </>
    );
}

export default phpframework;
