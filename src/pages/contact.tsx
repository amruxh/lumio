import { Github, Twitter, Linkedin, Send, Mail, Phone, MapPin } from 'lucide-react';
import Head from 'next/head';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Us | LUMIO</title>
                <meta
                    name="description"
                    content="Discover a wide range of premium products at LUMIO. From electronics to lifestyle essentials, shop high-quality items at the best prices with a seamless shopping experience."
                />
            </Head>
            <section className="px-4 py-10 sm:px-8 lg:px-20">
                <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>

                <div className="max-w-2xl mx-auto text-center space-y-4">
                    <div className="flex items-center justify-center gap-2">
                        <Mail className="w-5 h-5" />
                        <span>support@lumio.com</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Phone className="w-5 h-5" />
                        <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <MapPin className="w-5 h-5" />
                        <span>Kerala, India</span>
                    </div>
                </div>

                <div className="max-w-2xl mx-auto mt-12 border-t border-t-[var(--border)] pt-10">
                    <h3 className="text-2xl font-semibold text-center mb-2">Contact the Developer</h3>
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                        Designed and developed with ❤️ by Amruth Krishna. Passionate about web technologies and building products that make an impact.
                    </p>
                    <a
                        href="https://amruthhh.netlify.app/"
                        className="block text-center text-blue-400 hover:underline mb-4"
                    >
                        Visit My Portfolio
                    </a>
                    <div className="flex justify-center gap-4 text-gray-900 text-lg">
                        <a href="https://github.com/Me-amruth" target="_blank" rel="noopener noreferrer">
                            <Github className="hover:text-black transition" />
                        </a>
                        <a href="https://x.com/amruth_X" target="_blank" rel="noopener noreferrer">
                            <Twitter className="hover:text-blue-400 transition" />
                        </a>
                        <a href="https://www.linkedin.com/in/amruth-krishna-982732321" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="hover:text-blue-600 transition" />
                        </a>
                        <a href="https://t.me/meamruth/" target="_blank" rel="noopener noreferrer">
                            <Send className="hover:text-cyan-500 transition" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
