CREATE TABLE public."Volunteer"
(
    "ID" bigserial NOT NULL,
    companyid bigint,
    email varchar(25),
    engaged boolean,
    interested boolean,
    "locLat" bigint,
    loclong bigint,
    phone bigint,
    regionid bigint,
    rm boolean,
    roleid bigint,
    skillset character varying,
    zipcode bigint,
    engagedorgid bigint,
    CONSTRAINT volunteerid PRIMARY KEY ("ID")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."Volunteer"
    OWNER to administrator;


CREATE TABLE public."Organization"
(
    "OrgID" bigserial NOT NULL,
    name varchar(25),
    contactemail varchar(25),
    contactname varchar(25),
    contactphone varchar(25),
    status varchar(25),
    lastupdate date,
    orgtype varchar(25),
    regionid bigint,
    CONSTRAINT orgid PRIMARY KEY ("OrgID")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."Organization"
    OWNER to administrator;

ALTER TABLE public."Volunteer"
    ADD CONSTRAINT companyid FOREIGN KEY (companyid)
    REFERENCES public."PartnerCompany" ("CompanyID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
CREATE INDEX fki_companyid
    ON public."Volunteer"(companyid);


ALTER TABLE public."Volunteer"
    ADD CONSTRAINT regionid FOREIGN KEY (regionid)
    REFERENCES public."Region" ("regionID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
CREATE INDEX fki_regionid
    ON public."Volunteer"(regionid);


ALTER TABLE public."Volunteer"
    ADD CONSTRAINT orgid FOREIGN KEY (engagedorgid)
    REFERENCES public."Organization" ("OrgID") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;
CREATE INDEX fki_orgid
    ON public."Volunteer"(engagedorgid);


CREATE TABLE public."PartnerCompany"
(
    "CompanyID" bigserial NOT NULL,
    name varchar(25),
    CONSTRAINT companyid PRIMARY KEY ("CompanyID")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."PartnerCompany"
    OWNER to administrator;


INSERT INTO public."Region"(
    "regionID", region)
    VALUES 
    (1, 'northeast'),
    (2, 'southeast'),
    (3, 'southwest'),
    (4, 'northwest')
    (5, 'central');

INSERT INTO public."PartnerCompany"(
    "CompanyID", name)
    VALUES
    (1, 'CarbonBlack'),
    (2, 'Siemans'),
    (3, 'Deloitte'),
    (4, 'Accenture'),
    (5, 'Amazon');

INSERT INTO public."Organization"(
    "OrgID", name, contactemail, contactname, contactphone, status, orgtype, regionid, lastupdate, loclat, loclong, zipcode)
    VALUES (2, 'Northeast Middle School', 'person@northeastmiddle.edu', 'Mary Greenwood', '508-625-7854', 'ready', 'club', 1, '2018-11-01', '45.021810', '-93.233992', '55418');


   INSERT INTO public."Volunteer"(
    "ID", companyid, email, engaged, interested, "loclat", loclong, regionid, rm, skillset, zipcode, engagedorgid, role, phone)
    VALUES (2, 1, '567volunter@gmail.com', true, true, '46.021810', '-95.233992', 1, false, 'Full Stack Developer', '55418', 1, 'Trainer', '647-375-9836');
