import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { projectPageData } from '../data/projectsData';

export default function ProjectPage() {
    return (
        <>
            {/* Project Heading */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-center py-6 
                bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 
                bg-clip-text text-transparent animate-gradient-x">
                Projects
            </h1>

            <div className="min-h-screen bg-black text-white px-6 sm:px-8 md:px-10 py-8 
                flex flex-wrap items-center justify-center gap-6 md:gap-8">
                {projectPageData.map((project) => (
                    <Card
                        key={project.id}
                        sx={{
                            maxWidth: 345,
                            boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                            borderRadius: "12px",
                        }}
                        className="w-full sm:w-[280px] md:w-[320px] lg:w-[345px] bg-white text-black"
                    >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="180"
                                image={project.img}
                                alt={project.alt}
                                className="rounded-t-lg"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    className="truncate font-semibold text-lg"
                                >
                                    {project.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    className="text-gray-600 text-sm"
                                >
                                    {project.info}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className="flex justify-end px-4 pb-3">
                            <a
                                href={project.link}
                                className="text-blue-500 hover:text-blue-700 font-medium"
                            >
                                View
                            </a>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </>
    );
}
