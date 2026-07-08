import Input from "@/components/shared/Input";
import Select from "@/components/shared/Select";

const COUNTIES = [
  "Greater Manchester",
  "Lancashire",
  "Merseyside",
  "West Yorkshire",
  "London",
  "Other",
];

export default function ShippingAddressForm({ values, errors, onChange }) {
  function handleChange(field) {
    return (event) => onChange(field, event.target.value);
  }

  return (
    <div className="rounded-lg border border-line bg-cream-100 p-[26px]">
      <h2 className="mb-[18px] text-[1.15rem] text-cocoa-950">Shipping address</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          id="sFirst"
          label="First name"
          required
          value={values.sFirst}
          onChange={handleChange("sFirst")}
          error={errors.sFirst}
        />
        <Input
          id="sLast"
          label="Last name"
          required
          value={values.sLast}
          onChange={handleChange("sLast")}
          error={errors.sLast}
        />
      </div>

      <Input
        id="sStreet"
        label="Street address"
        required
        placeholder="House number and street name"
        value={values.sStreet}
        onChange={handleChange("sStreet")}
        error={errors.sStreet}
        wrapperClassName="mt-4"
      />

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Input
          id="sCity"
          label="Town / City"
          required
          value={values.sCity}
          onChange={handleChange("sCity")}
          error={errors.sCity}
        />
        <Select
          id="sCounty"
          label="County"
          required
          value={values.sCounty}
          onChange={handleChange("sCounty")}
          error={errors.sCounty}
        >
          <option value="">Select...</option>
          {COUNTIES.map((county) => (
            <option key={county} value={county}>
              {county}
            </option>
          ))}
        </Select>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Input
          id="sPostcode"
          label="Postcode"
          required
          placeholder="M1 1AE"
          value={values.sPostcode}
          onChange={handleChange("sPostcode")}
          error={errors.sPostcode}
        />
        <Input
          id="sPhone"
          label="Phone"
          type="tel"
          required
          value={values.sPhone}
          onChange={handleChange("sPhone")}
          error={errors.sPhone}
        />
      </div>
    </div>
  );
}
