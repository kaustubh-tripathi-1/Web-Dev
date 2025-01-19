import dataJSON from "../data.js";
import Card from "./Card.jsx";

export default function Main() {
    return (
        <article className="flex flex-col h-full w-full justify-center items-center">
            <Card
                img={dataJSON[0].img.src}
                alt={dataJSON[0].img.alt}
                location={dataJSON[0].title}
                country={dataJSON[0].country}
                googleMapsLink={dataJSON[0].googlegoogleMapsLinkLink}
                dates={dataJSON[0].dates}
                desc={dataJSON[0].text}
            />
            <Card
                img={dataJSON[1].img.src}
                alt={dataJSON[1].img.alt}
                location={dataJSON[1].title}
                country={dataJSON[1].country}
                googleMapsLink={dataJSON[1].googleMapsLink}
                dates={dataJSON[1].dates}
                desc={dataJSON[1].text}
            />
            <Card
                img={dataJSON[2].img.src}
                alt={dataJSON[2].img.alt}
                location={dataJSON[2].title}
                country={dataJSON[2].country}
                googleMapsLink={dataJSON[2].googleMapsLink}
                dates={dataJSON[2].dates}
                desc={dataJSON[2].text}
            />
        </article>
    );
}
