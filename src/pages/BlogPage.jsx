import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { blogPageData } from '../data/blogsData';
import BackToHome from '../components/BackToHome';

export default function BlogPage() {
    return (
        <>
            <BackToHome />

            <h1 className="text-4xl md:text-5xl font-mono text-center py-6 bg-[#101923] text-white animate-gradient-x">
                Blogs
            </h1>

            <div className="min-h-screen bg-black text-white px-6 sm:px-8 md:px-10 py-8 flex flex-wrap items-center justify-center gap-6 md:gap-8">
                {blogPageData.map((blog) => (
                    <Card key={blog.id} sx={{ maxWidth: 345, boxShadow: "0 4px 20px rgba(0,0,0,0.5)", borderRadius: "12px", }} className="w-full sm:w-[280px] md:w-[320px] lg:w-[345px] bg-white text-black border border-cyan-600">
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" className="truncate font-semibold text-lg">
                                    {blog.title}
                                </Typography>

                                <Typography variant="body2" className="text-gray-600 text-sm">
                                    {blog.info}
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                        <CardActions className="flex justify-end px-4 pb-3">
                            <a href={blog.link} className="text-blue-500 hover:text-blue-700 font-medium">
                                Read
                            </a>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </>
    );
}