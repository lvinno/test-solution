import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import { setUserProfile } from "@/redux/actions";

import Input from "@/components/HCard/Form/Main/Section/Input/Input";
import Button from "@Components/HCard/Form/Main/Section/Button/Button";
import FormMainSection from "@Components/HCard/Form/Main/Section/FormMainSection";

const FormMain = (props) => {
  const fileRef = useRef(null);
  const { register, handleSubmit, watch, setValue } = useForm();

  const onSubmit = (data) => console.log(data);
  const dispatch = useDispatch();
  const watchAllFields = watch();

  useEffect(() => {
    // console.log(watchAllFields);
    dispatch(setUserProfile(watchAllFields));
  }, [watchAllFields]);

  const handleAvatarPreview = (event) => {};
  const triggerSubmit = () => {};
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormMainSection title="Personal Details">
        <Input label="GIVEN NAME" {...register("givenName")}></Input>
        <Input label="SURNAME" {...register("surname")}></Input>
        <Input label="EMAIL" {...register("email")}></Input>
        <Input label="PHONE" {...register("phone")}></Input>
      </FormMainSection>
      <FormMainSection title="Address">
        <Input label="House Name or #" {...register("houseName")}></Input>
        <Input label="STREET" {...register("street")}></Input>
        <Input label="SUBURB" {...register("suburb")}></Input>
        <Input label="STATE" {...register("state")}></Input>
        <Input label="Postcode" {...register("postcode")}></Input>
        <Input label="Country" {...register("country")}></Input>
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
        <Button bgColor={"rgba(52,152,219,255)"} onClick={triggerSubmit}>
          Create hCard
        </Button>
      </FormMainSection>
    </form>
  );
};

export default FormMain;
