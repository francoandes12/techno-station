import Head from "next/head";
import Image from "next/image";
import HeadsetIcon from '@material-ui/icons/Headset';
import InfoIcon from '@material-ui/icons/Info';

export default function Home() {
  const dj = {
    nombre: "Eelke Kleijn",
    pais: "Holanda",
    genero: "Melodico/Progress",
    info:
      "Eelke Kleijn is a rare talent. With work stretching across movie trailer scores, deep live shows and incredibly well formed production, he crosses a boundary from electronic producer and in to a true modern day composer.-Fuente: Resident Advisor",
    foto:
      "https://ege.electronicgroove.com/wp-content/uploads/2020/06/Eelke-Kleijn-I.jpg",
  };
  return (
    <>
      <Head>
        <title>Techno Station</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-center mt-3 mb-4">Bienvenidos a Techno Station</h1>
      <div className="row gx-0">
        <div className="d-flex justify-content-center">
          <div className="col-6">
            <div className="card mb-5">
              <Image
                src={dj.foto}
                alt={dj.nombre}
                width={500}
                height={300}
                layout="responsive"
              />
              <div className="card-body">
                <h5 className="card-title text-dark">{dj.nombre}</h5>
                <p className="card-text text-dark">DJ del mes</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{dj.pais}</li>
                <li className="list-group-item"><HeadsetIcon/>{dj.genero}</li>
                <li className="list-group-item"><InfoIcon/>{dj.info}</li>
              </ul>
              <div className="card-body">
                <a href="https://soundcloud.com/eelke-kleijn" className="card-link" style={{ color: "orange" }}>
                  Soundcloud
                </a>
                <a href="https://www.facebook.com/eelkekleijn/" className="card-link text-primary">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
