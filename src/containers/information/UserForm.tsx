"use client";
import React from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Field } from "@/interfaces";
import { DateField } from "../components/DateField";
import { InputField } from "../components/InputField";
import { SelectField } from "../components/SelectField";
import { TextareaField } from "../components/TextareaField";

const UserForm: React.FC = () => {
  const form = useForm<any>({
    defaultValues: {
      nickName: "",
      firstName: "",
      lastName: "",
      username: "",
      mobile: "",
      gender: "1",
      bio: "",
      birthDate: undefined,
      facebook: "",
      city: "",
      district: "",
      ward: "",
      instagram: "",
      club: "",
      bloodGroup: "",
      identity: "",
      address: "",
      company: "",
      school: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const inputs: { left: Field[]; right: Field[] } = {
    left: [
      { fieldName: "nickName", label: "Nickname", placeholder: "Tên hiển thị", type: "input", required: true },
      { fieldName: "firstName", label: "Tên của bạn", placeholder: "Tên", type: "input", required: true },
      { fieldName: "lastName", label: "Họ và tên lót của bạn", placeholder: "Họ", type: "input", required: true },
      {
        fieldName: "username",
        label: "Username(Chỉ bao gồm các ký tự a-z, 0-9)",
        placeholder: "Username",
        type: "input",
      },
      { fieldName: "mobile", label: "Số điện thoại", placeholder: "Số điện thoại", type: "input", required: true },
      {
        fieldName: "gender",
        label: "Giới tính",
        type: "select",
        options: [
          { label: "Nam", value: "1" },
          { label: "Nữ", value: "2" },
        ],
      },
      { fieldName: "birthDate", label: "Ngày sinh", placeholder: "Chọn ngày sinh", type: "date", required: true },
      { fieldName: "bio", label: "Châm ngôn", placeholder: "Châm ngôn", type: "textarea" },
      { fieldName: "facebook", label: "Địa chỉ Facebook", placeholder: "https://facebook.com/user", type: "input" },
    ],
    right: [
      { fieldName: "city", label: "Tỉnh/TP", type: "select", required: true },
      {
        fieldName: "district",
        label: "Quận/Huyện",
        type: "select",
        options: [
          { label: "Quận 1", value: "1" },
          { label: "Quận 2", value: "2" },
          { label: "Quận 3", value: "3" },
        ],
      },
      {
        fieldName: "ward",
        label: "Phường/Xã",
        type: "select",
        options: [
          { label: "Phường 1", value: "1" },
          { label: "Phường 2", value: "2" },
          { label: "Phường 3", value: "3" },
        ],
      },
      { fieldName: "address", label: "Địa chỉ", placeholder: "Địa chỉ", type: "input", required: true },
      {
        fieldName: "company",
        label: "Công ty",
        type: "select",
        options: [
          { label: "Công ty 1", value: "1" },
          { label: "Công ty 2", value: "2" },
          { label: "Công ty 3", value: "3" },
        ],
      },
      {
        fieldName: "school",
        label: "Trường học",
        type: "select",
        options: [
          { label: "Trường 1", value: "1" },
          { label: "Trường 2", value: "2" },
          { label: "Trường 3", value: "3" },
        ],
      },
      { fieldName: "instagram", label: "Địa chỉ Instagram", placeholder: "https://instagram.com/user", type: "input" },
      { fieldName: "club", label: "Câu lạc bộ", type: "select" },
      { fieldName: "identity", label: "Số CMND/CCCD/Passport", placeholder: "Số CMND/CCCD/Passport", type: "input" },
      {
        fieldName: "bloodGroup",
        label: "Nhóm máu",
        type: "select",
        options: [
          { label: "A", value: "1" },
          { label: "B", value: "2" },
          { label: "AB", value: "3" },
          { label: "O", value: "4" },
        ],
      },
    ],
  };

  const renderField = (inputField: Field) => {
    const { type, ...inputProps } = inputField;

    switch (type) {
      case "input":
        return <InputField control={form.control} {...inputProps} />;
      case "select":
        return <SelectField control={form.control} {...inputProps} />;
      case "textarea":
        return <TextareaField control={form.control} {...inputProps} />;
      case "date":
        return <DateField control={form.control} {...inputProps} />;
      default:
        return null;
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-6">
            <div className="space-y-6">{inputs.left.map(renderField)}</div>
          </div>
          <div className="col-span-6">
            <div className="space-y-6">{inputs.right.map(renderField)}</div>
          </div>
          <div className="col-span-12 text-end">
            <Button>Lưu</Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default UserForm;
