import "./NotificationPopup.css";
import moment from "moment";
import truncateString from "../../../helpers/utils/TruncateString";

export const NotificationPopup = ({
  firstName = "John Doe",
  city = "New York",
  country = "United States",
  productName = "Puffer Jacket With Hidden Hood",
  timestamp = `${new Date()}`,
  productImage = "https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=",
  settings = { hideTimeAgo: false, truncateProductName: false },
}) => {
  const { hideTimeAgo, truncateProductName } = settings;
  return (
    <div className="Avava-SP__Wrapper fadeInUp animated">
      <div className="Avava-SP__Inner">
        <div className="Avava-SP__Container">
          <a href="#" className={"Avava-SP__LinkWrapper"}>
            <div
              className="Avava-SP__Image"
              style={{
                backgroundImage: `url(${productImage})`,
              }}
            ></div>
            <div className="Avada-SP__Content">
              <div className={"Avada-SP__Title"}>
                {firstName} in {city}, {country}
              </div>
              <div className={"Avada-SP__Subtitle"}>
                purchased{" "}
                {truncateProductName
                  ? truncateString(productName, 16)
                  : productName}
              </div>
              <div className={"Avada-SP__Footer"}>
                {hideTimeAgo ? "" : `${moment(timestamp).fromNow()}`}{" "}
                <span className="uni-blue">
                  <i className="fa fa-check" aria-hidden="true" /> by Avada
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
