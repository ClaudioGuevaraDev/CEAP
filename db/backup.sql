--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2 (Debian 14.2-1.pgdg110+1)
-- Dumped by pg_dump version 14.2

-- Started on 2022-06-08 22:30:55

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

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: user
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO "user";

--
-- TOC entry 3426 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: user
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 219 (class 1259 OID 16535)
-- Name: brand; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.brand (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.brand OWNER TO "user";

--
-- TOC entry 218 (class 1259 OID 16527)
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
-- TOC entry 214 (class 1259 OID 16481)
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
-- TOC entry 222 (class 1259 OID 16571)
-- Name: maintenance; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.maintenance (
    id integer NOT NULL,
    date date NOT NULL,
    id_equipment integer NOT NULL
);


ALTER TABLE public.maintenance OWNER TO "user";

--
-- TOC entry 215 (class 1259 OID 16488)
-- Name: measurement_unit; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.measurement_unit (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.measurement_unit OWNER TO "user";

--
-- TOC entry 213 (class 1259 OID 16466)
-- Name: member; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.member (
    id_project integer NOT NULL,
    id_user integer NOT NULL
);


ALTER TABLE public.member OWNER TO "user";

--
-- TOC entry 212 (class 1259 OID 16454)
-- Name: project; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.project (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.project OWNER TO "user";

--
-- TOC entry 220 (class 1259 OID 16547)
-- Name: provider; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.provider (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.provider OWNER TO "user";

--
-- TOC entry 211 (class 1259 OID 16439)
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
-- TOC entry 223 (class 1259 OID 16591)
-- Name: request_equipment; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.request_equipment (
    id_request integer NOT NULL,
    id_equipment integer NOT NULL,
    quantity integer NOT NULL
);


ALTER TABLE public.request_equipment OWNER TO "user";

--
-- TOC entry 217 (class 1259 OID 16512)
-- Name: request_reagent; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.request_reagent (
    id_request integer NOT NULL,
    id_lab_reagent integer NOT NULL,
    requested_amount real NOT NULL
);


ALTER TABLE public.request_reagent OWNER TO "user";

--
-- TOC entry 210 (class 1259 OID 16422)
-- Name: rol; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.rol (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.rol OWNER TO "user";

--
-- TOC entry 221 (class 1259 OID 16559)
-- Name: status; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.status (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.status OWNER TO "user";

--
-- TOC entry 216 (class 1259 OID 16500)
-- Name: type; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE public.type (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.type OWNER TO "user";

--
-- TOC entry 209 (class 1259 OID 16415)
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
-- TOC entry 3416 (class 0 OID 16535)
-- Dependencies: 219
-- Data for Name: brand; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.brand (id, name) FROM stdin;
\.


--
-- TOC entry 3415 (class 0 OID 16527)
-- Dependencies: 218
-- Data for Name: lab_equipment; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.lab_equipment (id, name, serial, id_brand, id_provider, next_maintanance, id_status) FROM stdin;
\.


--
-- TOC entry 3411 (class 0 OID 16481)
-- Dependencies: 214
-- Data for Name: lab_reagent; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.lab_reagent (id, name, cas, expiration_date, actual_amount, id_measurement_unit, id_type, buy_alarm) FROM stdin;
\.


--
-- TOC entry 3419 (class 0 OID 16571)
-- Dependencies: 222
-- Data for Name: maintenance; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.maintenance (id, date, id_equipment) FROM stdin;
\.


--
-- TOC entry 3412 (class 0 OID 16488)
-- Dependencies: 215
-- Data for Name: measurement_unit; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.measurement_unit (id, name) FROM stdin;
\.


--
-- TOC entry 3410 (class 0 OID 16466)
-- Dependencies: 213
-- Data for Name: member; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.member (id_project, id_user) FROM stdin;
\.


--
-- TOC entry 3409 (class 0 OID 16454)
-- Dependencies: 212
-- Data for Name: project; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.project (id, name) FROM stdin;
\.


--
-- TOC entry 3417 (class 0 OID 16547)
-- Dependencies: 220
-- Data for Name: provider; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.provider (id, name) FROM stdin;
\.


--
-- TOC entry 3408 (class 0 OID 16439)
-- Dependencies: 211
-- Data for Name: request; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.request (id, request_date, id_user, use_date, id_project) FROM stdin;
\.


--
-- TOC entry 3420 (class 0 OID 16591)
-- Dependencies: 223
-- Data for Name: request_equipment; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.request_equipment (id_request, id_equipment, quantity) FROM stdin;
\.


--
-- TOC entry 3414 (class 0 OID 16512)
-- Dependencies: 217
-- Data for Name: request_reagent; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.request_reagent (id_request, id_lab_reagent, requested_amount) FROM stdin;
\.


--
-- TOC entry 3407 (class 0 OID 16422)
-- Dependencies: 210
-- Data for Name: rol; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.rol (id, name) FROM stdin;
\.


--
-- TOC entry 3418 (class 0 OID 16559)
-- Dependencies: 221
-- Data for Name: status; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.status (id, name) FROM stdin;
\.


--
-- TOC entry 3413 (class 0 OID 16500)
-- Dependencies: 216
-- Data for Name: type; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public.type (id, name) FROM stdin;
\.


--
-- TOC entry 3406 (class 0 OID 16415)
-- Dependencies: 209
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: user
--

COPY public."user" (id, full_name, email, password, id_rol) FROM stdin;
\.


--
-- TOC entry 3243 (class 2606 OID 16541)
-- Name: brand brand_pk; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.brand
    ADD CONSTRAINT brand_pk PRIMARY KEY (id);


--
-- TOC entry 3241 (class 2606 OID 16533)
-- Name: lab_equipment lab_equipment_pk; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.lab_equipment
    ADD CONSTRAINT lab_equipment_pk PRIMARY KEY (id);


--
-- TOC entry 3233 (class 2606 OID 16487)
-- Name: lab_reagent laboratory_reagent_pk; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.lab_reagent
    ADD CONSTRAINT laboratory_reagent_pk PRIMARY KEY (id);


--
-- TOC entry 3249 (class 2606 OID 16575)
-- Name: maintenance maintenance_pk; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.maintenance
    ADD CONSTRAINT maintenance_pk PRIMARY KEY (id);


--
-- TOC entry 3235 (class 2606 OID 16494)
-- Name: measurement_unit measurement_unit_pk; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.measurement_unit
    ADD CONSTRAINT measurement_unit_pk PRIMARY KEY (id);


--
-- TOC entry 3231 (class 2606 OID 16470)
-- Name: member member_pk; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.member
    ADD CONSTRAINT member_pk PRIMARY KEY (id_project, id_user);


--
-- TOC entry 3229 (class 2606 OID 16460)
-- Name: project project_pk; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.project
    ADD CONSTRAINT project_pk PRIMARY KEY (id);


--
-- TOC entry 3245 (class 2606 OID 16553)
-- Name: provider provider_pk; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.provider
    ADD CONSTRAINT provider_pk PRIMARY KEY (id);


--
-- TOC entry 3251 (class 2606 OID 16595)
-- Name: request_equipment request_equipment_pk; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.request_equipment
    ADD CONSTRAINT request_equipment_pk PRIMARY KEY (id_equipment, id_request);


--
-- TOC entry 3227 (class 2606 OID 16443)
-- Name: request request_pk; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.request
    ADD CONSTRAINT request_pk PRIMARY KEY (id);


--
-- TOC entry 3239 (class 2606 OID 16516)
-- Name: request_reagent request_reagent_pk; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.request_reagent
    ADD CONSTRAINT request_reagent_pk PRIMARY KEY (id_request, id_lab_reagent);


--
-- TOC entry 3225 (class 2606 OID 16428)
-- Name: rol rol_pk; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.rol
    ADD CONSTRAINT rol_pk PRIMARY KEY (id);


--
-- TOC entry 3247 (class 2606 OID 16565)
-- Name: status status_pk; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.status
    ADD CONSTRAINT status_pk PRIMARY KEY (id);


--
-- TOC entry 3237 (class 2606 OID 16506)
-- Name: type type_pk; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.type
    ADD CONSTRAINT type_pk PRIMARY KEY (id);


--
-- TOC entry 3223 (class 2606 OID 16421)
-- Name: user user_pk; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pk PRIMARY KEY (id);


--
-- TOC entry 3261 (class 2606 OID 16542)
-- Name: lab_equipment lab_equipment_fk; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.lab_equipment
    ADD CONSTRAINT lab_equipment_fk FOREIGN KEY (id_brand) REFERENCES public.brand(id);


--
-- TOC entry 3262 (class 2606 OID 16581)
-- Name: lab_equipment lab_equipment_fk2; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.lab_equipment
    ADD CONSTRAINT lab_equipment_fk2 FOREIGN KEY (id_provider) REFERENCES public.provider(id);


--
-- TOC entry 3263 (class 2606 OID 16586)
-- Name: lab_equipment lab_equipment_fk3; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.lab_equipment
    ADD CONSTRAINT lab_equipment_fk3 FOREIGN KEY (id_status) REFERENCES public.status(id);


--
-- TOC entry 3257 (class 2606 OID 16495)
-- Name: lab_reagent laboratory_reagent_fk; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.lab_reagent
    ADD CONSTRAINT laboratory_reagent_fk FOREIGN KEY (id_measurement_unit) REFERENCES public.measurement_unit(id);


--
-- TOC entry 3258 (class 2606 OID 16507)
-- Name: lab_reagent laboratory_reagent_fk2; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.lab_reagent
    ADD CONSTRAINT laboratory_reagent_fk2 FOREIGN KEY (id_type) REFERENCES public.type(id);


--
-- TOC entry 3264 (class 2606 OID 16576)
-- Name: maintenance maintenance_fk; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.maintenance
    ADD CONSTRAINT maintenance_fk FOREIGN KEY (id_equipment) REFERENCES public.lab_equipment(id);


--
-- TOC entry 3255 (class 2606 OID 16471)
-- Name: member member_fk; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.member
    ADD CONSTRAINT member_fk FOREIGN KEY (id_user) REFERENCES public."user"(id);


--
-- TOC entry 3256 (class 2606 OID 16476)
-- Name: member member_fk_1; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.member
    ADD CONSTRAINT member_fk_1 FOREIGN KEY (id_project) REFERENCES public.project(id);


--
-- TOC entry 3265 (class 2606 OID 16596)
-- Name: request_equipment request_equipment_fk; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.request_equipment
    ADD CONSTRAINT request_equipment_fk FOREIGN KEY (id_request) REFERENCES public.request(id);


--
-- TOC entry 3266 (class 2606 OID 16601)
-- Name: request_equipment request_equipment_fk_1; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.request_equipment
    ADD CONSTRAINT request_equipment_fk_1 FOREIGN KEY (id_equipment) REFERENCES public.lab_equipment(id);


--
-- TOC entry 3253 (class 2606 OID 16449)
-- Name: request request_fk; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.request
    ADD CONSTRAINT request_fk FOREIGN KEY (id_user) REFERENCES public."user"(id);


--
-- TOC entry 3254 (class 2606 OID 16461)
-- Name: request request_fk2; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.request
    ADD CONSTRAINT request_fk2 FOREIGN KEY (id_project) REFERENCES public.project(id);


--
-- TOC entry 3259 (class 2606 OID 16517)
-- Name: request_reagent request_reagent_fk; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.request_reagent
    ADD CONSTRAINT request_reagent_fk FOREIGN KEY (id_lab_reagent) REFERENCES public.lab_reagent(id);


--
-- TOC entry 3260 (class 2606 OID 16522)
-- Name: request_reagent request_reagent_fk_1; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public.request_reagent
    ADD CONSTRAINT request_reagent_fk_1 FOREIGN KEY (id_request) REFERENCES public.request(id);


--
-- TOC entry 3252 (class 2606 OID 16434)
-- Name: user user_fk; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_fk FOREIGN KEY (id_rol) REFERENCES public.rol(id);


-- Completed on 2022-06-08 22:30:55

--
-- PostgreSQL database dump complete
--

