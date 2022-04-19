import type { NextPage } from "next";
import React,{useRef} from 'react'
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useForm } from "react-hook-form";

const Home: NextPage = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      example: "",
    },
  });

  return (
    <div>
      <Head>
        <title>Github Timeline Application</title>
        <meta name="description" content="github timeline application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center flex-wrap h-screen">
        <h1 className="pt-6">Github Timelines</h1>
        <h2>An application made to make timelines of github repo creations</h2>
        <div className="grid place-items-center h-5/6">
          <form
            onSubmit={handleSubmit((data) => {
              alert(JSON.stringify(data));
            })}
          >
            <input
              {...register("example", {
                required: true,
                maxLength: 12,
              })}
              className="indent-2 border border-black py-2 rounded"
              placeholder="Enter github username"
            />
            {errors.example && <p>This field is required</p>}
            <input className="ml-2 border bg-stone-500 hover:bg-stone-600 text-black uppercase p-2 rounded cursor-pointer" type="submit" />
          </form>
        </div>
      </main>
    </div>
  );
};

export default Home;
