

import { Form, useLoaderData, Link } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, company, category, shipping, order, price } = params;

  return (
    <Form className="bg-base-200 rounded-md px-4 py-4 flex flex-col gap-8">
      <FormInput
        type="search"
        label="Search Product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      <FormSelect
        label="Select Category"
        name="category"
        list={meta.categories}
        size="select-sm"
        defaultValue={category}
      />
      <FormSelect
        label="Select Company"
        name="company"
        list={meta.companies}
        size="select-sm"
        defaultValue={company}
      />
      <FormSelect
        label="Sort By"
        name="order"
        list={['a-z', 'z-a', 'high', 'low']}
        defaultValue={order}
        size="select-sm"
      />
      <FormRange
        label="Select Price"
        name="price"
        price={price}
        size="range-sm"
      />
      <FormCheckbox
        label="Free Shipping"
        name="shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />
      <div className="flex justify-evenly">
        <button type="submit" className="btn btn-primary btn-sm">SEARCH</button>
        <Link to="/products" className="btn btn-accent btn-sm">RESET</Link>
      </div>
    </Form>
  )
};

export default Filters; 