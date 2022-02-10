package com.n_tiers.photo_share.Repository;


import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.n_tiers.photo_share.Entity.imageModel;
public interface ImageRepository extends JpaRepository<imageModel, Long> {
	Optional<imageModel> findByName(String name);
}
