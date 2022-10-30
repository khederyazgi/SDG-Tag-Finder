package com.example.SDGTagFinder.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "Measurement")
public class Measurement {
	  @ManyToOne(fetch = FetchType.LAZY, optional = false)
	  @JoinColumn(name = "indicator_id", nullable = false)
	  @OnDelete(action = OnDeleteAction.CASCADE)
	  @JsonIgnore
      Indicator indicator;
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name="Measurement_id")
            private Long id;
        
        @Column(name="description")
        private String description;

		public Indicator getIndicator() {
			return indicator;
		}

		public void setIndicator(Indicator indicator) {
			this.indicator = indicator;
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}   
        
        
}