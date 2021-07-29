import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import alertify from "alertifyjs";
alertify.set("notifier", "position", "top-center");

import { setUserProfile } from "@/redux/actions";

import Input from "@/components/HCard/Form/Main/Section/Input/Input";
import Button from "@Components/HCard/Form/Main/Section/Button/Button";
import FormMainSection from "@Components/HCard/Form/Main/Section/FormMainSection";

const FormMain = (props) => {
  const fileRef = useRef(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = () => alertify.success("Your hCard has been created");
  const dispatch = useDispatch();
  const watchAllFields = watch();

  useEffect(() => {
    dispatch(setUserProfile(watchAllFields));
  }, [watchAllFields]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} data-testid="form">
      <FormMainSection title="Personal Details">
        <Input
          label="GIVEN NAME"
          {...register("givenName", { required: true })}
          errors={errors.givenName}
        ></Input>
        <Input
          label="SURNAME"
          {...register("surname", { required: true })}
          errors={errors.surname}
        ></Input>
        <Input
          label="EMAIL"
          {...register("email", { required: true })}
          errors={errors.email}
        ></Input>
        <Input
          label="PHONE"
          {...register("phone", { required: true })}
          errors={errors.phone}
        ></Input>
      </FormMainSection>
      <FormMainSection title="Address">
        <Input
          label="House Name or #"
          {...register("houseName", { required: true })}
          errors={errors.houseName}
        ></Input>
        <Input
          label="STREET"
          {...register("street", { required: true })}
          errors={errors.street}
        ></Input>
        <Input
          label="SUBURB"
          {...register("suburb", { required: true })}
          errors={errors.suburb}
        ></Input>
        <Input
          label="STATE"
          {...register("state", { required: true })}
          errors={errors.state}
        ></Input>
        <Input
          label="POSTCODE"
          {...register("postcode", { required: true })}
          errors={errors.postcode}
        ></Input>
        <Input
          label="COUNTRY"
          {...register("country", { required: true })}
          errors={errors.country}
        ></Input>
      </FormMainSection>
      <FormMainSection>
        <input
          type="file"
          accept=".png,.jpg,.jpeg"
          style={{ display: "none" }}
          {...register("avatar")}
          ref={fileRef}
          onChange={(event) =>
            setValue("avatar", URL.createObjectURL(event.target.files[0]), {
              shouldValidate: true,
            })
          }
        />
        <Button
          bgColor={"rgba(98,123,139,255)"}
          onClick={(e) => fileRef.current.click()}
        >
          Upload avatar
        </Button>
        <Button bgColor={"rgba(52,152,219,255)"} type={"submit"}>
          Create hCard
        </Button>
      </FormMainSection>
    </form>
  );
};

export default FormMain;
