import Input from "@/components/shared/Input";
import Select from "@/components/shared/Select";

const STATES = ["TX", "CA", "NY", "FL", "IL", "GA", "Other"];

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
          id="sState"
          label="State"
          required
          value={values.sState}
          onChange={handleChange("sState")}
          error={errors.sState}
        >
          <option value="">Select...</option>
          {STATES.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </Select>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Input
          id="sZip"
          label="ZIP code"
          required
          value={values.sZip}
          onChange={handleChange("sZip")}
          error={errors.sZip}
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
