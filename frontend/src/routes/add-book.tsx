"use-client";
import { useForm } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";

import { CalendarIcon, HelpCircle } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { toast } from "sonner";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FileDropzone } from "@/molecules/dropzone";
import { FileList } from "@/molecules/file-list";
import { Dropzone, DropzoneContent, DropzoneEmptyState } from "@/components/ui/shadcn-io/dropzone";

const formSchema = z.object({
  title: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),
  author: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters."),
  language: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters."),
  publishedDate: z
    .date()
    .min(new Date("2000-01-01"), "Published date must be after 2000.")
    .max(new Date(), "Published date must be in the past."),
  locationUrl: z,
  coverUrl: z.string("Invalid cover URL."),
});
function formatDate(date: Date | undefined) {
  if (!date) {
    return "";
  }
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
function isValidDate(date: Date | undefined) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}

function AddBookPage() {
  // const fileInputRef = useRef<HTMLInputElement>(null);
  // const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  // const [fileProgresses, setFileProgresses] = useState<Record<string, number>>(
  //   {},
  // );

  // const handleFileSelect = (files: FileList | null) => {
  //   if (!files) return;

  //   const newFiles = Array.from(files);
  //   setUploadedFiles((prev) => [...prev, ...newFiles]);

  //   newFiles.forEach((file) => {
  //     let progress = 0;
  //     const interval = setInterval(() => {
  //       progress += Math.random() * 10;
  //       if (progress >= 100) {
  //         progress = 100;
  //         clearInterval(interval);
  //       }
  //       setFileProgresses((prev) => ({
  //         ...prev,
  //         [file.name]: Math.min(progress, 100),
  //       }));
  //     }, 300);
  //   });
  // };

  // const handleBoxClick = () => {
  //   fileInputRef.current?.click();
  // };

  // const handleDragOver = (e: React.DragEvent) => {
  //   e.preventDefault();
  // };

  // const handleDrop = (e: React.DragEvent) => {
  //   e.preventDefault();
  //   handleFileSelect(e.dataTransfer.files);
  // };

  // const removeFile = (filename: string) => {
  //   setUploadedFiles((prev) => prev.filter((file) => file.name !== filename));
  //   setFileProgresses((prev) => {
  //     const newProgresses = { ...prev };
  //     delete newProgresses[filename];
  //     return newProgresses;
  //   });
  // };

  // const [open, setOpen] = useState(false);
  // const [date, setDate] = useState<Date | undefined>(new Date("2025-06-01"));
  // const [month, setMonth] = useState<Date | undefined>(date);
  // const [value, setValue] = useState(formatDate(date));

  // const mutation= useMutation({
  //       mutationFn: async(files: File[])=>{
  //              console.log(files);
  //               setFiles(files);
  //               const formData = new FormData();
  //               formData.append('file', files[0]);
  //               const API_URL = "http://localhost:9090/upload";
  //               const response = await fetch(API_URL, {
  //                 method: 'POST',
  //                 body: formData, 
  //               });
  //               if (!response.ok) {
  //                 const errorData = await response.json(); // Attempt to parse error details if available
  //                 throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.message || response.statusText}`);
  //               }
  //               const data=await response.json();
  //               return data;
                
  //       },
  //       onSuccess: async (data: any)=>{
  //         form.setFieldValue("locationUrl", data.file_url);
  //         form.setFieldValue("coverUrl", data.cover_url);
  //         toast.success("File uploaded successfully!");
  //       },
  //       onError: (error: Error)=>{
  //         toast.error(error.message);
  //       }
  //    });
  // const form = useForm({
  //   defaultValues: {
  //     title: "",
  //     author: "",
  //     language: "",
  //     publishedDate: new Date(),
  //     locationUrl: "",
  //     coverUrl: "",
  //   },
  //   validators: {
  //     onSubmit: formSchema,
  //   },
  //   onSubmit: async ({ value }) => {
  //     toast.success("You submitted the following values:", {
  //       description: (
  //         <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
  //           <code>{JSON.stringify(value, null, 2)}</code>
  //         </pre>
  //       ),
  //       position: "bottom-right",
  //       classNames: {
  //         content: "flex flex-col gap-2",
  //       },
  //       style: {
  //         "--border-radius": "calc(var(--radius)  + 4px)",
  //       } as React.CSSProperties,
  //     });
  //   },
  // });
     
  // const [files, setFiles] = useState<File[] | undefined>();
  const useHandleDrop= (acceptedFiles: File[])=>{
    if (acceptedFiles.length > 0) {
      // mutation.mutate(acceptedFiles);
    }      
  }
  // const handleDrop =  useCallback(async (files: File[]) => {
  //   console.log(files);
  //   setFiles(files);
  //   const formData = new FormData();
  //   formData.append('file', files[0]);
  //   const API_URL = "http://localhost:9090/upload";
  //   const response = await fetch(API_URL, {
  //     method: 'POST',
  //     body: formData, 
  //     // NOTE: Do NOT set 'Content-Type' manually!
  //     // The browser will automatically set it to 'multipart/form-data'
  //     // and include the correct 'boundary' string.
  //   });
  //   if (!response.ok) {
  //     const errorData = await response.json(); // Attempt to parse error details if available
  //     throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.message || response.statusText}`);
  //   }

  //   const data=await response.json();
  //   console.log(data.file_url);
  //   form.setFieldValue("locationUrl", data.file_url);
  //   form.setFieldValue("coverUrl", data.cover_url);
  //   // .then(response => {
  //   //   if (!response.ok) {
  //   //     // If the server response is not ok (e.g., 400, 500)
  //   //     throw new Error(`Server responded with ${response.status}`);
  //   //   }
  //   //   return response.json(); // Or response.text() if it's not JSON
  //   // })
  //   // .then(data => {
  //   //   console.log('File uploaded successfully:', data);
  //   //   alert('File uploaded!');
  //   // })
  //   // .catch(error => {
  //   //   console.error('Error uploading file:', error);
  //   //   alert('Error uploading file.');
  //   // });
  // },[]);
  return (
    <div className="mx-auto flex w-full flex-col justify-between md:max-w-7xl">
      <div className="flex flex-col justify-center pb-8">
        <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Add a New Book
        </h1>
        <FieldDescription>
          Please provide the details of the book you want to add.
        </FieldDescription>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          {/* <Dropzone
                    accept={{ '*': [] }}
                    maxFiles={10}
                    maxSize={1024 * 1024 * 10}
                    minSize={1024}
                    onDrop={useHandleDrop}
                    onError={console.error}
                    src={files}
                  >
            <DropzoneEmptyState />
            <DropzoneContent />
          </Dropzone> */}
        </div>
        <form
          id="bug-report-form"
          // onSubmit={(e) => {
          //   e.preventDefault();
          //   form.handleSubmit();
          // }}
        >
          {/* <div className="grid grid-cols-2 gap-4">
            <FieldGroup>
              <form.Field
                name="title"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Title</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        placeholder="Enter the book title"
                        autoComplete="off"
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />
            </FieldGroup>
            <FieldGroup>
              <form.Field
                name="title"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Author</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        placeholder="Enter the book author"
                        autoComplete="off"
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />
            </FieldGroup>
            <FieldGroup>
              <form.Field
                name="language"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Language</FieldLabel>
                      <div className="relative flex gap-2">
                        <Input
                          id="date"
                          value={value}
                          placeholder="June 01, 2025"
                          className="bg-background pr-10"
                          onChange={(e) => {
                            const date = new Date(e.target.value);
                            setValue(e.target.value);
                            if (isValidDate(date)) {
                              setDate(date);
                              setMonth(date);
                            }
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "ArrowDown") {
                              e.preventDefault();
                              setOpen(true);
                            }
                          }}
                        />
                        <Popover open={open} onOpenChange={setOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              id="date-picker"
                              variant="ghost"
                              className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                            >
                              <CalendarIcon className="size-3.5" />
                              <span className="sr-only">Select date</span>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent
                            className="w-auto overflow-hidden p-0"
                            align="end"
                            alignOffset={-8}
                            sideOffset={10}
                          >
                            <Calendar
                              mode="single"
                              selected={date}
                              captionLayout="dropdown"
                              month={month}
                              onMonthChange={setMonth}
                              onSelect={(date) => {
                                setDate(date);
                                setValue(formatDate(date));
                                setOpen(false);
                              }}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />
            </FieldGroup>
            <FieldGroup>
              <form.Field
                name="language"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Language</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        placeholder="Enter the book language"
                        autoComplete="off"
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />
            </FieldGroup>
          </div> */}
        </form>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/add-book")({
  component: AddBookPage,
  loader: () => ({
    showDefaultHeader: false,
  }),
});
