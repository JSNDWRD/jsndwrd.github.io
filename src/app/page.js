import React from "react";
import Head from "next/head";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Skill from "@/components/Skill";
import Navigation from "@/components/Navigation";
import Button from "@/components/Button";
import ProgressBar from "@/components/ProgressBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>jsndwrd</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Navigation />
      <main className="bg-primary flex text-text mt-20">
        <ProgressBar />
        <section className="h-[calc(100vh-5rem)] basis-1/3 flex flex-col">
          <div className="p-4 pl-12 fixed w-1/3 font-medium">
            <p className="text-2xl mb-1">Hello World, I am</p>
            <h1 className="text-8xl font-bebasneue leading-[.8]">
              Jason Edward Salim
            </h1>
            <h2 className="text-2xl">Web Developer</h2>
            <p className="my-4">A highschool student who likes to code</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button text="Let's Talk" />
              <a href="https://www.instagram.com/jsndwrd" target="_blank">
                <FaInstagram
                  size={35}
                  className="hover:fill-blue-600 fill-text hover:scale-125 transition-all"
                />
              </a>
              <a href="https://www.twitter.com/jsndwrd" target="_blank">
                <FaTwitter
                  size={35}
                  className="hover:fill-blue-600 fill-text hover:scale-125 transition-all"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/jason-edward-salim-50751927a/"
                target="_blank"
              >
                <FaLinkedin
                  size={35}
                  className="hover:fill-blue-600 fill-text hover:scale-125 transition-all"
                />
              </a>
            </div>
            <p className="mt-8">&copy; 2024 | Created by jsndwrd</p>
          </div>
        </section>
        <section
          id="mainContent"
          className=" bg-primary basis-2/3 pb-4 pl-8 pr-2"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            delectus, aperiam quibusdam a non minus aut impedit exercitationem
            nisi aliquid at perferendis! Suscipit, nulla. Accusamus quidem,
            quaerat quo blanditiis modi nulla cum autem voluptatem consequuntur
            totam ipsam officia dicta natus! Obcaecati adipisci repellat
            dolorem, similique quasi non voluptate ipsa at! Tempore, excepturi
            architecto. Consequuntur nemo recusandae nulla quisquam mollitia hic
            cumque ipsum neque quibusdam! Eos debitis earum officia tenetur unde
            pariatur dolore veniam omnis cumque fugit ut beatae aperiam tempora
            ipsum odit facere commodi voluptates, quo dolorem culpa vitae
            fugiat. Deserunt fugit necessitatibus nobis dolore reiciendis?
            Voluptas dicta porro eveniet aut aliquam, eius, blanditiis nemo, non
            quibusdam perferendis expedita. Perferendis ea cum eaque illo
            reiciendis, ipsa veritatis facilis mollitia distinctio excepturi
            vero consequuntur reprehenderit aspernatur sint quasi eum et. Labore
            eum ratione, consectetur autem excepturi adipisci tenetur quam
            beatae numquam nisi hic, repudiandae id. Nulla eius ipsa vitae
            commodi minima adipisci fugit distinctio, nemo ea, dignissimos
            repellendus ullam mollitia! Odio officiis, maiores, voluptate
            laborum molestias enim pariatur, eius autem vel nulla quia eveniet
            modi eos doloribus exercitationem soluta perspiciatis ullam nobis.
            Exercitationem autem corrupti rem amet minima quibusdam quae,
            incidunt natus deserunt. At aperiam aut quod fugit ipsam tempore
            voluptatibus nam. Iste exercitationem omnis non laudantium, culpa
            consectetur incidunt in? Debitis deserunt commodi corporis voluptas
            mollitia necessitatibus magni vel obcaecati quisquam adipisci.
            Molestias sapiente harum necessitatibus vitae cum corrupti
            perspiciatis, asperiores culpa enim aut non, autem voluptas libero
            ipsam nihil iure eligendi deserunt facilis commodi saepe eveniet! Et
            debitis at ducimus quis ea cumque est assumenda harum dicta tempore
            itaque tempora alias quasi, laborum voluptates incidunt! Aliquid
            ipsa sit blanditiis aut voluptatibus alias eveniet corrupti sed rem
            eum pariatur non cupiditate fugiat, similique voluptatem doloremque
            expedita omnis in tempore quidem et magni. Ipsam saepe expedita
            deserunt tempora reprehenderit nobis accusantium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            delectus, aperiam quibusdam a non minus aut impedit exercitationem
            nisi aliquid at perferendis! Suscipit, nulla. Accusamus quidem,
            quaerat quo blanditiis modi nulla cum autem voluptatem consequuntur
            totam ipsam officia dicta natus! Obcaecati adipisci repellat
            dolorem, similique quasi non voluptate ipsa at! Tempore, excepturi
            architecto. Consequuntur nemo recusandae nulla quisquam mollitia hic
            cumque ipsum neque quibusdam! Eos debitis earum officia tenetur unde
            pariatur dolore veniam omnis cumque fugit ut beatae aperiam tempora
            ipsum odit facere commodi voluptates, quo dolorem culpa vitae
            fugiat. Deserunt fugit necessitatibus nobis dolore reiciendis?
            Voluptas dicta porro eveniet aut aliquam, eius, blanditiis nemo, non
            quibusdam perferendis expedita. Perferendis ea cum eaque illo
            reiciendis, ipsa veritatis facilis mollitia distinctio excepturi
            vero consequuntur reprehenderit aspernatur sint quasi eum et. Labore
            eum ratione, consectetur autem excepturi adipisci tenetur quam
            beatae numquam nisi hic, repudiandae id. Nulla eius ipsa vitae
            commodi minima adipisci fugit distinctio, nemo ea, dignissimos
            repellendus ullam mollitia! Odio officiis, maiores, voluptate
            laborum molestias enim pariatur, eius autem vel nulla quia eveniet
            modi eos doloribus exercitationem soluta perspiciatis ullam nobis.
            Exercitationem autem corrupti rem amet minima quibusdam quae,
            incidunt natus deserunt. At aperiam aut quod fugit ipsam tempore
            voluptatibus nam. Iste exercitationem omnis non laudantium, culpa
            consectetur incidunt in? Debitis deserunt commodi corporis voluptas
            mollitia necessitatibus magni vel obcaecati quisquam adipisci.
            Molestias sapiente harum necessitatibus vitae cum corrupti
            perspiciatis, asperiores culpa enim aut non, autem voluptas libero
            ipsam nihil iure eligendi deserunt facilis commodi saepe eveniet! Et
            debitis at ducimus quis ea cumque est assumenda harum dicta tempore
            itaque tempora alias quasi, laborum voluptates incidunt! Aliquid
            ipsa sit blanditiis aut voluptatibus alias eveniet corrupti sed rem
            eum pariatur non cupiditate fugiat, similique voluptatem doloremque
            expedita omnis in tempore quidem et magni. Ipsam saepe expedita
            deserunt tempora reprehenderit nobis accusantium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            delectus, aperiam quibusdam a non minus aut impedit exercitationem
            nisi aliquid at perferendis! Suscipit, nulla. Accusamus quidem,
            quaerat quo blanditiis modi nulla cum autem voluptatem consequuntur
            totam ipsam officia dicta natus! Obcaecati adipisci repellat
            dolorem, similique quasi non voluptate ipsa at! Tempore, excepturi
            architecto. Consequuntur nemo recusandae nulla quisquam mollitia hic
            cumque ipsum neque quibusdam! Eos debitis earum officia tenetur unde
            pariatur dolore veniam omnis cumque fugit ut beatae aperiam tempora
            ipsum odit facere commodi voluptates, quo dolorem culpa vitae
            fugiat. Deserunt fugit necessitatibus nobis dolore reiciendis?
            Voluptas dicta porro eveniet aut aliquam, eius, blanditiis nemo, non
            quibusdam perferendis expedita. Perferendis ea cum eaque illo
            reiciendis, ipsa veritatis facilis mollitia distinctio excepturi
            vero consequuntur reprehenderit aspernatur sint quasi eum et. Labore
            eum ratione, consectetur autem excepturi adipisci tenetur quam
            beatae numquam nisi hic, repudiandae id. Nulla eius ipsa vitae
            commodi minima adipisci fugit distinctio, nemo ea, dignissimos
            repellendus ullam mollitia! Odio officiis, maiores, voluptate
            laborum molestias enim pariatur, eius autem vel nulla quia eveniet
            modi eos doloribus exercitationem soluta perspiciatis ullam nobis.
            Exercitationem autem corrupti rem amet minima quibusdam quae,
            incidunt natus deserunt. At aperiam aut quod fugit ipsam tempore
            voluptatibus nam. Iste exercitationem omnis non laudantium, culpa
            consectetur incidunt in? Debitis deserunt commodi corporis voluptas
            mollitia necessitatibus magni vel obcaecati quisquam adipisci.
            Molestias sapiente harum necessitatibus vitae cum corrupti
            perspiciatis, asperiores culpa enim aut non, autem voluptas libero
            ipsam nihil iure eligendi deserunt facilis commodi saepe eveniet! Et
            debitis at ducimus quis ea cumque est assumenda harum dicta tempore
            itaque tempora alias quasi, laborum voluptates incidunt! Aliquid
            ipsa sit blanditiis aut voluptatibus alias eveniet corrupti sed rem
            eum pariatur non cupiditate fugiat, similique voluptatem doloremque
            expedita omnis in tempore quidem et magni. Ipsam saepe expedita
            deserunt tempora reprehenderit nobis accusantium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            delectus, aperiam quibusdam a non minus aut impedit exercitationem
            nisi aliquid at perferendis! Suscipit, nulla. Accusamus quidem,
            quaerat quo blanditiis modi nulla cum autem voluptatem consequuntur
            totam ipsam officia dicta natus! Obcaecati adipisci repellat
            dolorem, similique quasi non voluptate ipsa at! Tempore, excepturi
            architecto. Consequuntur nemo recusandae nulla quisquam mollitia hic
            cumque ipsum neque quibusdam! Eos debitis earum officia tenetur unde
            pariatur dolore veniam omnis cumque fugit ut beatae aperiam tempora
            ipsum odit facere commodi voluptates, quo dolorem culpa vitae
            fugiat. Deserunt fugit necessitatibus nobis dolore reiciendis?
            Voluptas dicta porro eveniet aut aliquam, eius, blanditiis nemo, non
            quibusdam perferendis expedita. Perferendis ea cum eaque illo
            reiciendis, ipsa veritatis facilis mollitia distinctio excepturi
            vero consequuntur reprehenderit aspernatur sint quasi eum et. Labore
            eum ratione, consectetur autem excepturi adipisci tenetur quam
            beatae numquam nisi hic, repudiandae id. Nulla eius ipsa vitae
            commodi minima adipisci fugit distinctio, nemo ea, dignissimos
            repellendus ullam mollitia! Odio officiis, maiores, voluptate
            laborum molestias enim pariatur, eius autem vel nulla quia eveniet
            modi eos doloribus exercitationem soluta perspiciatis ullam nobis.
            Exercitationem autem corrupti rem amet minima quibusdam quae,
            incidunt natus deserunt. At aperiam aut quod fugit ipsam tempore
            voluptatibus nam. Iste exercitationem omnis non laudantium, culpa
            consectetur incidunt in? Debitis deserunt commodi corporis voluptas
            mollitia necessitatibus magni vel obcaecati quisquam adipisci.
            Molestias sapiente harum necessitatibus vitae cum corrupti
            perspiciatis, asperiores culpa enim aut non, autem voluptas libero
            ipsam nihil iure eligendi deserunt facilis commodi saepe eveniet! Et
            debitis at ducimus quis ea cumque est assumenda harum dicta tempore
            itaque tempora alias quasi, laborum voluptates incidunt! Aliquid
            ipsa sit blanditiis aut voluptatibus alias eveniet corrupti sed rem
            eum pariatur non cupiditate fugiat, similique voluptatem doloremque
            expedita omnis in tempore quidem et magni. Ipsam saepe expedita
            deserunt tempora reprehenderit nobis accusantium.
          </p>
        </section>
      </main>
    </div>
  );
}

{
  /*<main className="bg-slate-50 mt-16 pb-10 font-inter">
        <section className="min-h-screen">
          <div className="text-center h- sm:text-left px-4 sm:px-10 pt-2 pb-10">
            <div className="flex h-full my-2">
              <div className=" mx-auto sm:mx-0">
                <Image src={profile} className="w-64 h-64 sm:w-auto sm:h-auto max-lg:hidden rounded-l-md grayscale-0" />
              </div>
              <div className="bg-white grow text-center sm:text-left p-4 sm:p-10 ">
                <div className="p-5">
                  <h1 className="text-4xl sm:text-7xl font-bold font-playfair text-neutral-950 mb-4">Hello World!</h1>
                  <span className="text-base sm:text-lg text-neutral-950">
                    As a web developer, I specialize in creating visually appealing and highly functional websites using HTML, CSS, and JavaScript. With a strong design sense, I bring digital concepts to life, ensuring seamless user
                    experiences across various devices. My expertise lies in efficiently translating creative ideas into clean code, utilizing the latest tools and frameworks for optimal performance. I collaborate closely with clients and
                    design teams, thriving on problem-solving and ensuring websites maintain high quality. Committed to staying updated on industry trends, I constantly seek opportunities to enhance my skills and integrate innovative
                    solutions into my projects.
                  </span>
                  <div className="flex items-center my-2 text-xl sm:text-3xl gap-3">
                    <a href="https://www.instagram.com/jsndwrd" target="_blank">
                      <FaInstagram className="hover:fill-blue-500 fill-neutral-950 hover:scale-125 hover:mx-2 transition-all" />
                    </a>
                    <a href="https://www.twitter.com/jsndwrd" target="_blank">
                      <FaTwitter className="hover:fill-blue-500 fill-neutral-950 hover:scale-125 hover:mx-2 transition-all" />
                    </a>
                    <a href="https://www.linkedin.com/in/jason-edward-salim-50751927a/" target="_blank">
                      <FaLinkedin className="hover:fill-blue-500 fill-neutral-950 hover:scale-125 hover:mx-2 transition-all" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white">
          <div className="py-2 px-4">
            <h3 className="text-2xl sm:text-3xl font-medium py-2">Skills</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              <Skill skill="HTML" proficiency="Advanced" time="3" />
              <Skill skill="CSS" proficiency="Advanced" time="3" />
              <Skill skill="Javascript" proficiency="Intermediate" time="2" />
              <Skill skill="TailwindCSS" proficiency="Advanced" time="2" />
              <Skill skill="ReactJS" proficiency="Novice" time="1" />
              <Skill skill="NextJS" proficiency="Novice" time="1" />
              <Skill skill="Python" proficiency="Intermediate" time="2" />
              <Skill skill="Bootstrap" proficiency="Advanced" time="2" />
            </div>
          </div>
          <div className="py-2 px-4">
            <h3 className="text-2xl sm:text-3xl font-medium py-2">Projects</h3>
          </div>
        </section>
      </main>*/
}
