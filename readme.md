## Initial commands
- yarn init -y
- yarn add typescript -D
- yarn tsc --init
  
### package.json
```json
{
  "scripts": {
    "start": "npx tsx --watch src/server.ts"
  }
}
```
- yarn add express
- yarn add @types/express -D
- yarn add ts-node-dev -D
- yarn add knex sqlite3

## Data-Base
### Tables
1. **Students** (tabela para registrar os alunos)
  - stu_rm
  - stu_name
  - stu_avatar
  - stu_pass
---
2. **Subjects** (tabela para registrar matérias, como, "matemática", "marketing")
  * sub_id
  * sub_name
```sql
CREATE TABLE Subjects (
    sub_id INT PRIMARY KEY,
    sub_name VARCHAR(255) NOT NULL
);
```
---
3. **Courses** (tabela para registrar os cursos, como, "administração", "RH")
  * cou_id
  * cou_name
```sql
CREATE TABLE Courses (
    cou_id INT PRIMARY KEY,
    cou_name VARCHAR(255) NOT NULL
);
```
---
4. **Courses_Subjects**
  * cou_sub_id
  * cou_sub_name (como a matéria vai ser chamada dentro daquele curso: "marketing imobiliário")
  * sub_id - foreign key (matéria: "marketing")
  * cou_id - foreign key
```sql
CREATE TABLE Course_Subjects (
    cou_id INT,
    sub_id INT,
    PRIMARY KEY (cou_id, sub_id),
    FOREIGN KEY (cou_id) REFERENCES Courses(cou_id),
    FOREIGN KEY (sub_id) REFERENCES Subjects(sub_id)
);
```
---
```sql
-- Inserindo o curso
INSERT INTO Courses (cou_id, cou_name) VALUES (1, 'Administração');

-- Inserindo as matérias
INSERT INTO Subjects (sub_id, sub_name) VALUES (1, 'Marketing');
INSERT INTO Subjects (sub_id, sub_name) VALUES (2, 'Contabilidade');
INSERT INTO Subjects (sub_id, sub_name) VALUES (3, 'Finanças');

-- Relacionando o curso com as matérias
INSERT INTO Course_Subjects (cou_id, sub_id) VALUES (1, 1); -- Administração -> Marketing
INSERT INTO Course_Subjects (cou_id, sub_id) VALUES (1, 2); -- Administração -> Contabilidade
INSERT INTO Course_Subjects (cou_id, sub_id) VALUES (1, 3); -- Administração -> Finanças
```
* To list all subjects for a specific course:
```sql
SELECT s.sub_name
FROM Subjects s
JOIN Course_Subjects cs ON s.sub_id = cs.sub_id
WHERE cs.cou_id = 1;
```
* To list all courses that include a specific subject:
```sql
SELECT c.cou_name
FROM Courses c
JOIN Course_Subjects cs ON c.cou_id = cs.cou_id
WHERE cs.sub_id = 1;
```
---
5. **Studying** (tabela de relação n:n para registrar qual (aluno) está em qual (curso), junto com o "módulo")
  * stu_id
  * stu_rm - foreign key
  * cou_id - foreign key
  * stu_module
---
6. **Teachers** (tabela para registrar os professores)
  * tea_rm
  * tea_name
  * tea_avatar
  * tea_pass
---
7. **Classes** (tabela para registrar as aulas, (professor), (alunos), matéria dada com detalhes e se teve material de apoio, como "slide", "trabalho", "atividades", "apresentação")
  * cla_id
  * tea_rm - foreign key
  * sub_id - foreign key
  * cla_description
  * cla_content
  * cla_date
---
8. **Class_Students**
  * cla_stud_id
  * cla_id - foreign key
  * stu_id - foreign key
---
9. **Grades** (I, R, B, MB, Na)
  * gra_id
  * gra_value
  * gra_description
---
10.  **Score** (Nota do Aluno)
  * sco_id
  * stu_rm - foreign key
  * sub_id - foreign key
  * gra_id - foreign key
  * sco_date

### Connections
- List teacher's
- List student's
- List subject's

### Use Cases to Register Users
- Register teacher
- Register student
- Register courses
- Register subject

### Use Cases to Record Classes Given or Planned
- Register Classes