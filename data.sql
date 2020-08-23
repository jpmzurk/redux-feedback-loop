-- Database should be prime_feedback
CREATE DATABASE "prime_feedback";

-- Switch to "prime_feedback" before making:
-- Table to store the feedback
CREATE TABLE "feedback" (
  id serial primary key,
  student text default 'student not named',
  feeling INT not null,
  understanding INT not null,
  "support" INT not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 


-- Sample feedback
INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
VALUES (4, 4, 5, 'Doing Great!');

INSERT INTO "feedback" ("student", "feeling", "understanding", "support", "comments")
VALUES ('Paul', 3, 4, 3, 'Doing Ok!');

INSERT INTO "feedback" ("student", "feeling", "understanding", "support", "comments", "flagged")
VALUES ('Mary', 1, 1, 4, 'Doing!', true);

INSERT INTO "feedback" ("student", "feeling", "understanding", "support", "comments", "flagged")
VALUES ('Noah', 5, 5, 4, 'Couldnt be better!');


INSERT INTO "feedback" ("student", "feeling", "understanding", "support", "comments")
VALUES ('Michael', 1, 1, 1, 'Am not! Material UI tables are difficult to implement and should contain better documentation. Thank Goodness Redux has slightly better documentation. if youre still reading this, plz understand this is a fake comment. mostly', true);