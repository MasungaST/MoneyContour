-- Table: public.Profile

-- DROP TABLE IF EXISTS public."Profile";

--CREATE TABLE IF NOT EXISTS public."Profile"
(
    "ProfileID" integer NOT NULL GENERATED ALWAYS AS IDENTITY ( CYCLE INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 1000 CACHE 1 ),
    "Name" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "Surname" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "DateOfBirth" timestamp with time zone,
    "Gender" character varying(10) COLLATE pg_catalog."default",
    "Email" character varying COLLATE pg_catalog."default" NOT NULL,
    "Password" character varying(255) COLLATE pg_catalog."default" NOT NULL,
    "ProfileImage" bytea,
    CONSTRAINT "Profile_pkey" PRIMARY KEY ("ProfileID")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Profile"
    OWNER to postgres;

COMMENT ON TABLE public."Profile"
    IS 'User Profile entity';

COMMENT ON COLUMN public."Profile"."ProfileID"
    IS 'Auto-generated primary identifier';