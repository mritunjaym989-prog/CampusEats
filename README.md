# CampusEats - GraphQL API (Assignment 07)

## Team Members
- Mritunjay maurya (20252651035)
- Anshu mala (20252651010)
- Sanika Jain (20252651046)
- Annu Mishra (20252651009)

## How to Run
1. Import SQL database: `mysql -u root -p < schema.sql`
2. Install dependencies: `npm install`
3. Run Apollo Server: `node server.js`
4. Open `public/index.html` in your browser.

## Google Drive Video Link
[(https://drive.google.com/file/d/1ztUJzIzbFlb5SlXyLDkuxvYlTn-36qGs/view?usp=sharing)]

---

## Assignment Questions

1. **Which CampusEats service did you pick?**
   - Menu Service (`dishes` entity).

2. **Name one field a client can skip and one it cannot (why we use the "!" sign):**
   - **Cannot skip:** `name` (marked `String!`). The `!` defines a non-null requirement in GraphQL, raising an error if absent or null.
   - **Can skip:** `available` in `AddDishInput` (marked `Boolean` without `!`), defaulting to `true` in the database.

3. **Map it to SQL/other database: which part of your query became the WHERE, and which resolver ran the INSERT?**
   - The `id` argument in the `dish(id: ID!)` query maps directly to `WHERE id = ?` in SQL.
   - The `addDish` mutation resolver executes the `INSERT INTO dishes (...) VALUES (...)` SQL statement.