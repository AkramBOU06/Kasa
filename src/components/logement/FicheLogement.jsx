import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "../../components/carrousel/Carrousel";
import Collapse from "../../components/collapse/Collapse";
import Host from "../../components/host/Host";
import Rate from "../../components/rating/Rating";
import Tag from "../../components/tag/Tag";
import logementsData from "../../datas/logements.json";

export default function FicheLogement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pickedAppart, setPickedAppart] = useState(null);

  useEffect(() => {
    const picked = logementsData.find(logement => logement.id === id);
    if (!picked) {
      navigate("/404", { replace: true, state: { message: "Can't find data" } });
    } else {
      setPickedAppart(picked);
    }
  }, [id, navigate]);

  if (!pickedAppart) {
    return null;
  }

  const { pictures, title, location, tags, host, rating, description, equipments } = pickedAppart;

  return (
    <div className="fiche-container">
      <Carrousel slides={pictures} />
      <section className="hostInfo-container">
        <div className="title-tags-container">
          <div className="title-container redFont">
            <h1>{title}</h1>
            <h3>{location}</h3>
          </div>
          <div className="tags-container">
            {tags.map((tag, index) => (
              <Tag key={index} name={tag} />
            ))}
          </div>
        </div>
        <div className="rate-host-container">
          <div className="host-container redFont">
            <Host name={host.name} picture={host.picture} />
          </div>
          <div className="rate-container">
            <Rate score={parseInt(rating, 10)} />
          </div>
        </div>
      </section>
      <div className="collapse-fiche-container">
        <Collapse title="Description" content={description} />
        <Collapse title="Équipements" content={<ul>{equipments.map((equip, index) => <li key={index}>{equip}</li>)}</ul>} />
      </div>
    </div>
  );
}
