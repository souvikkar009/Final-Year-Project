import React from "react";
import Carousel from "../components/Carousel";

const slideData = [
    {
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur consequatur tempore voluptates suscipit minima quam non aliquam quis doloribus quisquam.",
    },
    {
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur consequatur tempore voluptates suscipit minima quam non aliquam quis doloribus quisquam.",
    },
    {
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur consequatur tempore voluptates suscipit minima quam non aliquam quis doloribus quisquam.",
    },
    {
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur consequatur tempore voluptates suscipit minima quam non aliquam quis doloribus quisquam.",
    },
    {
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur consequatur tempore voluptates suscipit minima quam non aliquam quis doloribus quisquam.",
    },
];

const Home = () => {
    return (
        <div>
            <Carousel slides={slideData} />
        </div>
    );
};

export default Home;
