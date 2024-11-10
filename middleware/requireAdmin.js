// requireAdmin.js
export const requireAdmin = (req, res, next) => {
    if (!req.user || !req.user.role || !req.user.role.includes("admin")) {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }
    next();
  };
  