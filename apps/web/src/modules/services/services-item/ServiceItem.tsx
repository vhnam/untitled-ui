import { Skeleton } from '@repo/ui';

const ServiceItem = () => {
  return (
    <div className="px-medium py-xsmall gap-xsmall inline-flex items-center">
      <div>
        <Skeleton variant="square" size="large" />
      </div>
      <div className="flex flex-col">
        <div className="h3 font-semiBold mb-xxxsmall">
          Two Rows of Service Name Lorem Ipsum Dolor Sit Amet
        </div>
        <div className="label font-medium">Provider Name</div>
        <div className="mt-xxsmall text-textInformationBold h3 font-semiBold">
          $100
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
