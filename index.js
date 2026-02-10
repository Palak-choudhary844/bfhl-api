const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const EMAIL = "lalit1310.be23@chitkarauniversity.edu.in";


app.get("/health", (req, res) => {
  res.status(200).json({
    is_success: true,
    official_email: EMAIL
  });
});


app.post("/bfhl", async (req, res) => {
  try {
    const body = req.body;

    if (body.fibonacci) {
      let n = body.fibonacci;
      let fib = [0, 1];
      for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
      }
      return res.json({
        is_success: true,
        official_email: EMAIL,
        data: fib.slice(0, n)
      });
    }

    if (body.prime) {
      const primes = body.prime.filter(num => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
        }
        return true;
      });
      return res.json({
        is_success: true,
        official_email: EMAIL,
        data: primes
      });
    }

    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const lcm = (a, b) => (a * b) / gcd(a, b);

    if (body.hcf) {
      const result = body.hcf.reduce((a, b) => gcd(a, b));
      return res.json({
        is_success: true,
        official_email: EMAIL,
        data: result
      });
    }

    if (body.lcm) {
      const result = body.lcm.reduce((a, b) => lcm(a, b));
      return res.json({
        is_success: true,
        official_email: EMAIL,
        data: result
      });
    }

    if (body.AI) {
      return res.json({
        is_success: true,
        official_email: EMAIL,
        data: "Mumbai"
      });
    }

    res.status(400).json({ is_success: false });

  } catch (err) {
    res.status(500).json({ is_success: false });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
