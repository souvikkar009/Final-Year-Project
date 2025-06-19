// import React from "react";

// const slideData = [
//     {
//         title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur consequatur tempore voluptates suscipit minima quam non aliquam quis doloribus quisquam.",
//     },
//     {
//         title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur consequatur tempore voluptates suscipit minima quam non aliquam quis doloribus quisquam.",
//     },
//     {
//         title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur consequatur tempore voluptates suscipit minima quam non aliquam quis doloribus quisquam.",
//     },
//     {
//         title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur consequatur tempore voluptates suscipit minima quam non aliquam quis doloribus quisquam.",
//     },
//     {
//         title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur consequatur tempore voluptates suscipit minima quam non aliquam quis doloribus quisquam.",
//     },
// ];

// const Home = () => {
//     return <div>Home Page</div>;
// };

// export default Home;

import React, { useState, useEffect } from "react";
import {
    Database,
    Shield,
    Zap,
    Users,
    ArrowRight,
    Play,
    CheckCircle,
    Star,
} from "lucide-react";

const Home = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible((prev) => ({
                            ...prev,
                            [entry.target.id]: true,
                        }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('[id^="reveal-"]').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const features = [
        {
            icon: Database,
            title: "Streamlined Management",
            description:
                "Centralize all academic data in one secure platform, simplifying sharing and access for seamless collaboration.",
            color: "from-teal-400 to-teal-600",
        },
        {
            icon: Zap,
            title: "Reduced Manual Effort",
            description:
                "Automate form filling and verification processes to eliminate delays and boost operational efficiency.",
            color: "from-blue-400 to-blue-600",
        },
        {
            icon: Shield,
            title: "Secure and Private",
            description:
                "Enterprise-grade encryption and consent-based sharing ensure your data remains protected and compliant.",
            color: "from-purple-400 to-purple-600",
        },
        {
            icon: Users,
            title: "Seamless Integration",
            description:
                "Powerful APIs enable efficient data access for institutions and organizations requiring student information.",
            color: "from-green-400 to-green-600",
        },
    ];

    // const stats = [
    //     { number: "10,000+", label: "Students Connected" },
    //     { number: "500+", label: "Institutions" },
    //     { number: "99.9%", label: "Uptime" },
    //     { number: "256-bit", label: "Encryption" },
    // ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl"
                    style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
                    style={{ transform: `translateY(${scrollY * -0.15}px)` }}
                />
                <div
                    className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                    style={{ transform: `translateY(${scrollY * 0.08}px)` }}
                />
            </div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-8">
                <div className="container mx-auto text-center relative z-10">
                    <div
                        id="reveal-hero"
                        className={`transition-all duration-1000 ${
                            isVisible["reveal-hero"]
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                    >
                        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                            Transforming
                            <span className="block bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Academic Data
                            </span>
                            Management
                        </h1>
                    </div>

                    <div
                        id="reveal-subtitle"
                        className={`transition-all duration-1000 delay-200 ${
                            isVisible["reveal-subtitle"]
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                    >
                        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                            Centralize, secure, and streamline your academic
                            records with AcadVault's revolutionary platform.
                            Experience the future of educational data management
                            today.
                        </p>
                    </div>

                    {/* <div
                        id="reveal-cta"
                        className={`transition-all duration-1000 delay-400 ${
                            isVisible["reveal-cta"]
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                    >
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                            <button className="group px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-2">
                                Get Started Free
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
                                <Play className="w-5 h-5" />
                                Watch Demo
                            </button>
                        </div>
                    </div> */}

                    {/* Stats */}
                    {/* <div
                        id="reveal-stats"
                        className={`transition-all duration-1000 delay-600 ${
                            isVisible["reveal-stats"]
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-400 text-sm">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 px-8 relative z-10">
                <div className="container mx-auto">
                    <div
                        id="reveal-features-title"
                        className={`text-center mb-16 transition-all duration-1000 ${
                            isVisible["reveal-features-title"]
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                    >
                        <h2 className="text-5xl py-2 font-bold mb-6 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Why AcadVault?
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Revolutionary features designed to eliminate
                            inefficiencies and transform how academic data is
                            managed
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                id={`reveal-feature-${index}`}
                                className={`group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                                    isVisible[`reveal-feature-${index}`]
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-8"
                                }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div
                                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <feature.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-teal-400 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scalable Solution Section */}
            <section className="py-24 px-8 relative z-10">
                <div className="container mx-auto">
                    <div
                        id="reveal-scalable"
                        className={`bg-gradient-to-r from-teal-600/20 to-blue-600/20 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center transition-all duration-1000 ${
                            isVisible["reveal-scalable"]
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                    >
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-4xl py-2 md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                                Scalable Solution for Everyone
                            </h2>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                A transformative platform enhancing efficiency
                                for students, institutions, and organizations
                                that need student data. Built to scale with your
                                growing needs while maintaining security and
                                performance.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {[
                                    "Students",
                                    "Universities",
                                    "Employers",
                                    "Government",
                                    "Research Institutions",
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-8 relative z-10">
                <div className="container mx-auto text-center">
                    <div
                        id="reveal-final-cta"
                        className={`max-w-4xl mx-auto transition-all duration-1000 ${
                            isVisible["reveal-final-cta"]
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            Ready to Transform Your
                            <span className="block pb-3 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                                Academic Data Management?
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                            Join thousands of students and institutions already
                            experiencing the future of academic data management.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-8 border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
                <div className="container mx-auto text-center">
                    <div className="font-bold text-3xl mb-4 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                        AcadVault
                    </div>
                    <p className="text-gray-400 mb-6">
                        Transforming Academic Data Management
                    </p>
                    <div className="flex justify-center space-x-8 text-sm text-gray-400">
                        <a
                            href="#"
                            className="hover:text-teal-400 transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="hover:text-teal-400 transition-colors"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#"
                            className="hover:text-teal-400 transition-colors"
                        >
                            Contact
                        </a>
                        <a
                            href="#"
                            className="hover:text-teal-400 transition-colors"
                        >
                            Support
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
