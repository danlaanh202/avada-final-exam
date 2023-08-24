import { Box, HorizontalStack, Icon, Text, Thumbnail } from "@shopify/polaris";
import { CancelMajor, TickSmallMinor } from "@shopify/polaris-icons";

const NotificationProductItem = () => {
  return (
    <div className="notification-product__container">
      <Box borderRadius={4} overflowX="hidden" overflowY="hidden">
        <Thumbnail
          alt="product thumbnail"
          size="large"
          source="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
        />
      </Box>
      <div className="notification-product__item">
        <div className="notification-product__details">
          <Box maxWidth="200px">
            <Text breakWord>Someone in New York, United States</Text>
            <Text fontWeight="semibold">Purchased Sport Sneaker</Text>
          </Box>
          <HorizontalStack align="space-between">
            <Text color="subdued">a day ago</Text>
            <div className="notification-product__verification">
              <Icon source={TickSmallMinor} color="highlight" /> by Avada
            </div>
          </HorizontalStack>
        </div>

        <button className="resource-item-icon__btn">
          <Icon source={CancelMajor} />
        </button>
      </div>
    </div>
  );
};

export default NotificationProductItem;
