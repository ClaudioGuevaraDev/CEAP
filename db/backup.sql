--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2 (Debian 14.2-1.pgdg110+1)
-- Dumped by pg_dump version 14.2 (Debian 14.2-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: brand; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.brand (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.brand OWNER TO "user";

--
-- Name: brand_id; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public.brand_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.brand_id OWNER TO "user";

--
-- Name: brand_id; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public.brand_id OWNED BY public.brand.id;


--
-- Name: lab_equipment; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.lab_equipment (
    id integer NOT NULL,
    name character varying NOT NULL,
    serial character varying,
    id_brand integer,
    id_provider integer,
    next_maintanance date,
    id_status integer
);


ALTER TABLE public.lab_equipment OWNER TO "user";

--
-- Name: lab_equipment_id; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public.lab_equipment_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.lab_equipment_id OWNER TO "user";

--
-- Name: lab_equipment_id; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public.lab_equipment_id OWNED BY public.lab_equipment.id;


--
-- Name: lab_reagent; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.lab_reagent (
    id integer NOT NULL,
    name character varying NOT NULL,
    cas character varying,
    expiration_date date,
    actual_amount real,
    id_measurement_unit integer,
    id_type integer,
    buy_alarm real
);


ALTER TABLE public.lab_reagent OWNER TO "user";

--
-- Name: lab_reagent_id; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public.lab_reagent_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.lab_reagent_id OWNER TO "user";

--
-- Name: lab_reagent_id; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public.lab_reagent_id OWNED BY public.lab_reagent.id;


--
-- Name: maintenance; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.maintenance (
    id integer NOT NULL,
    date date NOT NULL,
    id_equipment integer NOT NULL
);


ALTER TABLE public.maintenance OWNER TO "user";

--
-- Name: maintenance_id; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public.maintenance_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.maintenance_id OWNER TO "user";

--
-- Name: maintenance_id; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public.maintenance_id OWNED BY public.maintenance.id;


--
-- Name: measurement_unit; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.measurement_unit (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.measurement_unit OWNER TO "user";

--
-- Name: measurement_unit_id; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public.measurement_unit_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.measurement_unit_id OWNER TO "user";

--
-- Name: measurement_unit_id; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public.measurement_unit_id OWNED BY public.measurement_unit.id;


--
-- Name: member; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.member (
    id_project integer NOT NULL,
    id_user integer NOT NULL
);


ALTER TABLE public.member OWNER TO "user";

--
-- Name: project; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.project (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.project OWNER TO "user";

--
-- Name: project_id; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public.project_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.project_id OWNER TO "user";

--
-- Name: project_id; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public.project_id OWNED BY public.project.id;


--
-- Name: provider; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.provider (
    id integer DEFAULT nextval('public.provider'::regclass) NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.provider OWNER TO "user";

--
-- Name: provider_id; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public.provider_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.provider_id OWNER TO "user";

--
-- Name: provider_id; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public.provider_id OWNED BY public.provider.id;


--
-- Name: request; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.request (
    id integer NOT NULL,
    request_date date NOT NULL,
    id_user integer NOT NULL,
    use_date date NOT NULL,
    id_project integer NOT NULL
);


ALTER TABLE public.request OWNER TO "user";

--
-- Name: request_equipment; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.request_equipment (
    id_request integer NOT NULL,
    id_equipment integer NOT NULL,
    quantity integer NOT NULL
);


ALTER TABLE public.request_equipment OWNER TO "user";

--
-- Name: request_id; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public.request_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.request_id OWNER TO "user";

--
-- Name: request_id; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public.request_id OWNED BY public.request.id;


--
-- Name: request_reagent; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.request_reagent (
    id_request integer NOT NULL,
    id_lab_reagent integer NOT NULL,
    requested_amount real NOT NULL
);


ALTER TABLE public.request_reagent OWNER TO "user";

--
-- Name: rol; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.rol (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.rol OWNER TO "user";

--
-- Name: rol_id; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public.rol_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.rol_id OWNER TO "user";

--
-- Name: rol_id; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public.rol_id OWNED BY public.rol.id;


--
-- Name: status; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.status (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.status OWNER TO "user";

--
-- Name: status_id; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public.status_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.status_id OWNER TO "user";

--
-- Name: status_id; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public.status_id OWNED BY public.status.id;


--
-- Name: type; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.type (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.type OWNER TO "user";

--
-- Name: type_id; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public.type_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.type_id OWNER TO "user";

--
-- Name: type_id; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public.type_id OWNED BY public.type.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    full_name character varying NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    id_rol integer NOT NULL
);


ALTER TABLE public."user" OWNER TO "user";

--
-- Name: user_id; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE public.user_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id OWNER TO "user";

--
-- Name: user_id; Type: SEQUENCE OWNED BY; Schema: public; Owner: user
--

ALTER SEQUENCE public.user_id OWNED BY public."user".id;


--
-- Name: brand id; Type: DEFAULT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.brand ALTER COLUMN id SET DEFAULT nextval('public.brand_id'::regclass);


--
-- Name: lab_equipment id; Type: DEFAULT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.lab_equipment ALTER COLUMN id SET DEFAULT nextval('public.lab_equipment_id'::regclass);


--
-- Name: lab_reagent id; Type: DEFAULT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.lab_reagent ALTER COLUMN id SET DEFAULT nextval('public.lab_reagent_id'::regclass);


--
-- Name: maintenance id; Type: DEFAULT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.maintenance ALTER COLUMN id SET DEFAULT nextval('public.maintenance_id'::regclass);


--
-- Name: measurement_unit id; Type: DEFAULT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.measurement_unit ALTER COLUMN id SET DEFAULT nextval('public.measurement_unit_id'::regclass);


--
-- Name: project id; Type: DEFAULT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.project ALTER COLUMN id SET DEFAULT nextval('public.project_id'::regclass);


--
-- Name: request id; Type: DEFAULT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.request ALTER COLUMN id SET DEFAULT nextval('public.request_id'::regclass);


--
-- Name: rol id; Type: DEFAULT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.rol ALTER COLUMN id SET DEFAULT nextval('public.rol_id'::regclass);


--
-- Name: status id; Type: DEFAULT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.status ALTER COLUMN id SET DEFAULT nextval('public.status_id'::regclass);


--
-- Name: type id; Type: DEFAULT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.type ALTER COLUMN id SET DEFAULT nextval('public.type_id'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: user
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id'::regclass);


--
-- Data for Name: brand; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.brand (id, name) FROM stdin;
7	fdafad
\.


--
-- Data for Name: lab_equipment; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.lab_equipment (id, name, serial, id_brand, id_provider, next_maintanance, id_status) FROM stdin;
\.


--
-- Data for Name: lab_reagent; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.lab_reagent (id, name, cas, expiration_date, actual_amount, id_measurement_unit, id_type, buy_alarm) FROM stdin;
\.


--
-- Data for Name: maintenance; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.maintenance (id, date, id_equipment) FROM stdin;
\.


--
-- Data for Name: measurement_unit; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.measurement_unit (id, name) FROM stdin;
\.


--
-- Data for Name: member; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.member (id_project, id_user) FROM stdin;
\.


--
-- Data for Name: project; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.project (id, name) FROM stdin;
\.


--
-- Data for Name: provider; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.provider (id, name) FROM stdin;
\.


--
-- Data for Name: request; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.request (id, request_date, id_user, use_date, id_project) FROM stdin;
\.


--
-- Data for Name: request_equipment; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.request_equipment (id_request, id_equipment, quantity) FROM stdin;
\.


--
-- Data for Name: request_reagent; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.request_reagent (id_request, id_lab_reagent, requested_amount) FROM stdin;
\.


--
-- Data for Name: rol; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.rol (id, name) FROM stdin;
\.


--
-- Data for Name: status; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.status (id, name) FROM stdin;
\.


--
-- Data for Name: type; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.type (id, name) FROM stdin;
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public."user" (id, full_name, email, password, id_rol) FROM stdin;
\.


--
-- Name: brand_id; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public.brand_id', 8, true);


--
-- Name: lab_equipment_id; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public.lab_equipment_id', 1, true);


--
-- Name: lab_reagent_id; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public.lab_reagent_id', 1, true);


--
-- Name: maintenance_id; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public.maintenance_id', 1, false);


--
-- Name: measurement_unit_id; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public.measurement_unit_id', 1, false);


--
-- Name: project_id; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public.project_id', 1, false);


--
-- Name: provider_id; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public.provider_id', 1, false);


--
-- Name: request_id; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public.request_id', 1, false);


--
-- Name: rol_id; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public.rol_id', 1, false);


--
-- Name: status_id; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public.status_id', 1, false);


--
-- Name: type_id; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public.type_id', 1, false);


--
-- Name: user_id; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('public.user_id', 1, false);


--
-- Name: brand brand_pk; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.brand
    ADD CONSTRAINT brand_pk PRIMARY KEY (id);


--
-- Name: brand brand_un; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.brand
    ADD CONSTRAINT brand_un UNIQUE (name);


--
-- Name: lab_equipment lab_equipment_pk; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.lab_equipment
    ADD CONSTRAINT lab_equipment_pk PRIMARY KEY (id);


--
-- Name: lab_reagent laboratory_reagent_pk; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.lab_reagent
    ADD CONSTRAINT laboratory_reagent_pk PRIMARY KEY (id);


--
-- Name: maintenance maintenance_pk; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.maintenance
    ADD CONSTRAINT maintenance_pk PRIMARY KEY (id);


--
-- Name: measurement_unit measurement_unit_pk; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.measurement_unit
    ADD CONSTRAINT measurement_unit_pk PRIMARY KEY (id);


--
-- Name: measurement_unit measurement_unit_un; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.measurement_unit
    ADD CONSTRAINT measurement_unit_un UNIQUE (name);


--
-- Name: member member_pk; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.member
    ADD CONSTRAINT member_pk PRIMARY KEY (id_project, id_user);


--
-- Name: project project_pk; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.project
    ADD CONSTRAINT project_pk PRIMARY KEY (id);


--
-- Name: project project_un; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.project
    ADD CONSTRAINT project_un UNIQUE (name);


--
-- Name: provider provider_pk; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.provider
    ADD CONSTRAINT provider_pk PRIMARY KEY (id);


--
-- Name: provider provider_un; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.provider
    ADD CONSTRAINT provider_un UNIQUE (name);


--
-- Name: request_equipment request_equipment_pk; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.request_equipment
    ADD CONSTRAINT request_equipment_pk PRIMARY KEY (id_equipment, id_request);


--
-- Name: request request_pk; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.request
    ADD CONSTRAINT request_pk PRIMARY KEY (id);


--
-- Name: request_reagent request_reagent_pk; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.request_reagent
    ADD CONSTRAINT request_reagent_pk PRIMARY KEY (id_request, id_lab_reagent);


--
-- Name: rol rol_pk; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.rol
    ADD CONSTRAINT rol_pk PRIMARY KEY (id);


--
-- Name: rol rol_un; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.rol
    ADD CONSTRAINT rol_un UNIQUE (name);


--
-- Name: status status_pk; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.status
    ADD CONSTRAINT status_pk PRIMARY KEY (id);


--
-- Name: status status_un; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.status
    ADD CONSTRAINT status_un UNIQUE (name);


--
-- Name: type type_pk; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.type
    ADD CONSTRAINT type_pk PRIMARY KEY (id);


--
-- Name: type type_un; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.type
    ADD CONSTRAINT type_un UNIQUE (name);


--
-- Name: user user_pk; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pk PRIMARY KEY (id);


--
-- Name: user user_un; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_un UNIQUE (email);


--
-- Name: lab_equipment lab_equipment_fk; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.lab_equipment
    ADD CONSTRAINT lab_equipment_fk FOREIGN KEY (id_brand) REFERENCES public.brand(id);


--
-- Name: lab_equipment lab_equipment_fk2; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.lab_equipment
    ADD CONSTRAINT lab_equipment_fk2 FOREIGN KEY (id_provider) REFERENCES public.provider(id);


--
-- Name: lab_equipment lab_equipment_fk3; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.lab_equipment
    ADD CONSTRAINT lab_equipment_fk3 FOREIGN KEY (id_status) REFERENCES public.status(id);


--
-- Name: lab_reagent laboratory_reagent_fk; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.lab_reagent
    ADD CONSTRAINT laboratory_reagent_fk FOREIGN KEY (id_measurement_unit) REFERENCES public.measurement_unit(id);


--
-- Name: lab_reagent laboratory_reagent_fk2; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.lab_reagent
    ADD CONSTRAINT laboratory_reagent_fk2 FOREIGN KEY (id_type) REFERENCES public.type(id);


--
-- Name: maintenance maintenance_fk; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.maintenance
    ADD CONSTRAINT maintenance_fk FOREIGN KEY (id_equipment) REFERENCES public.lab_equipment(id);


--
-- Name: member member_fk; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.member
    ADD CONSTRAINT member_fk FOREIGN KEY (id_user) REFERENCES public."user"(id);


--
-- Name: member member_fk_1; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.member
    ADD CONSTRAINT member_fk_1 FOREIGN KEY (id_project) REFERENCES public.project(id);


--
-- Name: request_equipment request_equipment_fk; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.request_equipment
    ADD CONSTRAINT request_equipment_fk FOREIGN KEY (id_request) REFERENCES public.request(id);


--
-- Name: request_equipment request_equipment_fk_1; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.request_equipment
    ADD CONSTRAINT request_equipment_fk_1 FOREIGN KEY (id_equipment) REFERENCES public.lab_equipment(id);


--
-- Name: request request_fk; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.request
    ADD CONSTRAINT request_fk FOREIGN KEY (id_user) REFERENCES public."user"(id);


--
-- Name: request request_fk2; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.request
    ADD CONSTRAINT request_fk2 FOREIGN KEY (id_project) REFERENCES public.project(id);


--
-- Name: request_reagent request_reagent_fk; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.request_reagent
    ADD CONSTRAINT request_reagent_fk FOREIGN KEY (id_lab_reagent) REFERENCES public.lab_reagent(id);


--
-- Name: request_reagent request_reagent_fk_1; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.request_reagent
    ADD CONSTRAINT request_reagent_fk_1 FOREIGN KEY (id_request) REFERENCES public.request(id);


--
-- Name: user user_fk; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_fk FOREIGN KEY (id_rol) REFERENCES public.rol(id);


--
-- PostgreSQL database dump complete
--

