import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/client";
import { useEffect } from "react";

export default function Home() {
  const [session, loading] = useSession();


  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        "background-image":
          "linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(/hero-bg.jpg)",
      }}
    >
      <Head>
        <title> Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0.238 0.034 919.406 248.488"
            className="w-28"
          >
            <path
              fill="#e50914"
              d="M870.46 118.314l49.184 130.208c-14.495-2.07-28.982-4.663-43.733-6.999l-27.707-71.945-28.468 66.006c-13.973-2.336-27.698-3.114-41.672-4.928l49.955-113.89L782.71.034h41.937l25.362 65.22L877.194.034h42.442zM749.596.034h-38.052v225.71c12.425.779 25.362 1.292 38.052 2.841zm-70.927 223.118c-34.68-2.328-69.37-4.39-104.829-5.177V.035h38.823v181.188c22.264.514 44.52 2.32 66.006 3.355zM532.417 88.305v38.822h-53.06v88.263h-38.3V.034H549.77v38.822h-70.405v49.45h53.06zM375.82 38.856v178.605c-12.946 0-26.14 0-38.83.514V38.856h-40.122V.034H416.19v38.822zM254.94 129.19c-17.08 0-37.274 0-51.769.787v57.715c22.778-1.557 45.556-3.363 68.59-4.141v37.273l-107.412 8.548V.034h107.405v38.822H203.17v52.29c15.017 0 38.052-.778 51.768-.778v38.83zM39.831 107.447V243.08c-13.965 1.557-26.398 3.371-39.593 5.442V.034h37.017L87.724 141.11V.034h38.83V232.47c-13.717 2.336-27.698 3.114-42.45 5.177z"
            />
          </svg>
        </div>
        <div>
          {!session ? (
            <button
              onClick={() => signIn("google")}
              className="flex items-center bg-[#e50914] text-white text-sm px-4 py-2 rounded"
            >
              Sign In
            </button>
          ) : (
            <button
              onClick={() => signOut()}
              className="flex items-center bg-[#e50914] text-white text-sm px-4 py-2 rounded"
            >
              Sign Out
            </button>
          )}
        </div>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-white max-w-lg">
          Animes, Películas y series ilimitadas y mucho más.
        </h1>
        <h2 className="text-2xl text-white my-4 mb-8">
          Disfruta donde quieras. Cancela cuando quieras.
        </h2>
        <p className="text-white text-lg">
          ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
          reiniciar tu membresía de Netflix.
        </p>

        <div className="flex">
          <input
            type=""
            placeholder="Email"
            className="bg-with p-4 min-w-[400px]"
          />
          <button onClick={() => signIn("google")} className="bg-red-600 text-white text-lg px-8 flex items-center text-xl">
            Comenzar
            <svg
              className="w-5 "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLineJoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}
