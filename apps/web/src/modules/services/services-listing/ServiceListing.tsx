import { Chip } from '@repo/ui';
import ServicesItem from '../services-item';

const ServiceListing = () => {
  return (
    <div>
      <div className="px-medium py-xsmall gap-xxsmall flex">
        <Chip leadingIcon="FilterAlt">Filter</Chip>
        <Chip leadingIcon="Sort">Sort</Chip>
      </div>
      <div className="flex flex-col">
        <ServicesItem />
        <ServicesItem />
        <ServicesItem />
        <ServicesItem />
        <ServicesItem />
        <ServicesItem />
        <ServicesItem />
        <ServicesItem />
        <ServicesItem />
        <ServicesItem />
      </div>
    </div>
  );
};

export default ServiceListing;
