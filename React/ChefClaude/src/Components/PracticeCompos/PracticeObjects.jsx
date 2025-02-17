import { useState } from "react";
import avatar from "../../assets/ObjectStateImages/user.png";
import starFilled from "../../assets/ObjectStateImages/star-filled.png";
import starEmpty from "../../assets/ObjectStateImages/star-empty.png";

export default function PracticeObjects() {
    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false,
    });

    function toggleFavorite() {
        setContact((prevContact) => {
            //$ For deep copy of nested objects
            const newContact = /* { ...prevContact } */ JSON.parse(
                JSON.stringify(prevContact)
            );
            newContact.isFavorite = !newContact.isFavorite;
            return newContact;

            //$ For shallow copy
            // return { ...prevContact, isFavorite: !prevContact.isFavorite };
        });
    }

    return (
        <main className="w-screen h-screen bg-sky-900 flex justify-center items-center">
            <article className="card w-2/6 h-5/6 flex flex-col justify-around items-center content-between bg-white rounded-4xl">
                <img
                    src={avatar}
                    className="avatar w-4/6 justify-items-start "
                    alt="User profile picture of John Doe"
                />
                <div className="info w-full h-3/6 flex flex-col justify-start items-start">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite}
                        aria-label={
                            contact.isFavorite
                                ? "Remove from favourites"
                                : "Add to favorites"
                        }
                        className="favorite-button w-15 h-1/6 cursor-pointer m-4"
                    >
                        <img
                            src={contact.isFavorite ? starFilled : starEmpty}
                            alt={
                                contact.isFavorite
                                    ? "filled star icon"
                                    : "empty star icon"
                            }
                            className="favorite w-full"
                        />
                    </button>
                    <h2 className="name text-3xl font-bold m-4">{`${contact.firstName} ${contact.lastName}`}</h2>
                    <p className="contact m-3 text-lg">{`${contact.phone}`}</p>
                    <p className="contact m-3 text-lg">{`${contact.email}`}</p>
                </div>
            </article>
        </main>
    );
}
