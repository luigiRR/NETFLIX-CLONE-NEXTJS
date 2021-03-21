import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title> Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center bg-black">
        <h1 className="text-6xl font-bold text-white max-w-lg">
          Películas y series ilimitadas y mucho más.
        </h1>
        <h2 className="text-2xl text-white my-4 mb-8">
          Disfruta donde quieras. Cancela cuando quieras.
        </h2>
        <p className="text-white">
          ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
          reiniciar tu membresía de Netflix.
        </p>

        <div className="flex">
          <input type="" placeholder="Email" className="bg-with p-4" />
          <button className="bg-red-600 text-white text-lg px-8 flex items-center text-xl">
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
