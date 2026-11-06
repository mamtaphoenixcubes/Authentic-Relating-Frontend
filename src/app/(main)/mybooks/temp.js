  {/* ===== LEFT: CATEGORY FILTER ===== */}

                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <Box sx={{ position: "relative", mb: 4 }}>

                            {/* LEFT ARROW */}
                            <IconButton
                                onClick={() => setCategoryPage((p) => Math.max(p - 1, 0))}
                                disabled={categoryPage === 0}
                                sx={{
                                    position: "absolute",
                                    left: 0,
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    zIndex: 2,
                                }}
                            >
                                <ChevronLeftIcon />
                            </IconButton>

                            {/* CATEGORY ROW */}
                            <Stack
                                direction="row"
                                spacing={1.5}
                                sx={{
                                    overflowX: "auto",
                                    px: 5,
                                    scrollBehavior: "smooth",
                                    alignItems: "center",

                                    "&::-webkit-scrollbar": { display: "none" },
                                }}
                            >
                                {visibleCategories.map((item, index) => {
                                    const label = item?.title || "All";
                                    const id = item?._id || "";
                                    const isSelected = selectedCategory === id;

                                    return (
                                        <motion.div
                                            key={id || "all"}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                        >
                                            <Chip
                                                label={label}
                                                onClick={() => handleChipClick(id, label)}
                                                sx={{
                                                    height: 40,
                                                    px: 2,
                                                    borderRadius: "10px",
                                                    fontSize: 14,
                                                    fontWeight: 500,
                                                    cursor: "pointer",

                                                    ...(isSelected
                                                        ? {
                                                            background:
                                                                "linear-gradient(98.48deg, #95C4FF 0%, #087EDF 100%) !important",
                                                            color: "#fff !important",
                                                            border: "2px solid #fff",
                                                            boxShadow:
                                                                "0px 2px 8px rgba(119, 119, 119, 0.35)",
                                                        }
                                                        : {
                                                            background: "#F9FAFB",
                                                            border: "1px solid #E5E7EB",
                                                            color: "#555",
                                                            "&:hover": {
                                                                border: "1px solid #087EDF",
                                                                color: "#087EDF",
                                                            },
                                                        }),
                                                }}
                                            />
                                        </motion.div>
                                    );
                                })}
                            </Stack>

                            {/* RIGHT ARROW */}
                            <IconButton
                                onClick={() =>
                                    setCategoryPage((p) => Math.min(p + 1, maxCategoryPage))
                                }
                                disabled={categoryPage === maxCategoryPage}
                                sx={{
                                    position: "absolute",
                                    right: 0,
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    zIndex: 2,
                                }}
                            >
                                <ChevronRightIcon />
                            </IconButton>
                        </Box>
                    </motion.div>