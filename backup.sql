
-- tabla-->
CREATE TABLE public.persona (
	id serial NOT NULL,
	"name" varchar NOT NULL,
	email varchar NOT NULL,
	CONSTRAINT persona_pk PRIMARY KEY (id)
);

