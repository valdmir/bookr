package com.bivala.bookr.usecase;

import com.bivala.bookr.dao.ReviewDao;
import com.bivala.bookr.dto.ReviewDTO;
import com.bivala.bookr.entity.Review;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class ReviewUCImpl implements ReviewUC {
    private final ReviewDao reviewDao;

    public ReviewUCImpl(ReviewDao reviewDao) {
        this.reviewDao = reviewDao;
    }

    @Override
    public ReviewDTO create(ReviewDTO reviewDTO) {
        Review review = new Review();
        BeanUtils.copyProperties(reviewDTO, review);
        review = reviewDao.save(review);
        BeanUtils.copyProperties(review, reviewDTO);
        return reviewDTO;
    }

    @Override
    public ReviewDTO update(Long id, ReviewDTO reviewDTO) {
        Review review = reviewDao.findById(id)
                .orElseThrow(() -> new RuntimeException("Review not found"));
        BeanUtils.copyProperties(reviewDTO, review, "id");
        review = reviewDao.save(review);
        BeanUtils.copyProperties(review, reviewDTO);
        return reviewDTO;
    }

    @Override
    public void delete(Long id) {
        reviewDao.deleteById(id);
    }
}
